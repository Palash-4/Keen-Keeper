import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootyLayout from './Layout/RootyLayout';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Homepage from './pages/homepage/Homepage';
import FriendsDetails from './pages/homepage/friendsDetails/FriendsDetails';
import TimeLine from './pages/timeLine/TimeLine';
import { ToastContainer } from "react-toastify";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootyLayout />,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
       {
        path: "/friend/:id",
        element: <FriendsDetails></FriendsDetails>,
      },
      {
        path: "/timeline",
        element: <TimeLine></TimeLine>,
      },
      {
        path: "/stats",
        element: <h2>Stats Page</h2>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-right" /> 
    <RouterProvider router={router} />
  </StrictMode>,
)
