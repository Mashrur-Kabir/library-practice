import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
