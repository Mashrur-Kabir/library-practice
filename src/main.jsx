import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import ErrorPage from './Components/Errorpage/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>, /* when we use home (main comp), we will show its children */
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
