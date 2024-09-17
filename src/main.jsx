import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Users from './Components/Users/Users';
import UserDetails from './Components/userDetails/userDetails';
import Books from './Components/Books/Books';
/* import Genres from './Components/Genres/Genres'; */
import ScienceFic from './Components/ScienceFic/ScienceFic';
import Fantasy from './Components/Fantasy/Fantasy';
import NonFiction from './Components/NonFiction/NonFiction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>, /* when we use home (main comp), we will show its children */
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
