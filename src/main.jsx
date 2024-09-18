import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Users from './Components/Users/Users';
import UserDetails from './Components/userDetails/userDetails';
import Books from './Components/Books/Books';
import ScienceFic from './Components/ScienceFic/ScienceFic';
import Fantasy from './Components/Fantasy/Fantasy';
import NonFiction from './Components/NonFiction/NonFiction';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
import SignUp from './Components/Signup/Signup';


const handleLoginSubmit = data => {
  console.log('Login up data', data);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage> ,
  },
  {
    path: "/users",
    loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
    element: <Users></Users>
  },
  {
    path: "/user/:userId",
    loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    element: <UserDetails></UserDetails>
  },
  {
    path: "/books",
    element: <Books></Books>
  },
  {
    path: "/sciFi",
    element: <ScienceFic></ScienceFic>
  },
  {
    path: "/fantasy",
    element: <Fantasy></Fantasy>
  },
  {
    path: "/nonFic",
    element: <NonFiction></NonFiction>
  },
  {
    path: "/login",
    element: <Login
    formTitle={'Login'}
    handleSubmit={handleLoginSubmit}>
      <div className="mb-8">
        <h2 className="mb-4 text-3xl font-bold text-center figtreeFont">Welcome bookworm!</h2>
        <p>Please Login here...</p>
      </div>
    </Login>,
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  },
  {
    path: "/signup",
    element: <SignUp
    formTitle={'Login'}
    handleSubmit={handleLoginSubmit}>
    </SignUp>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
