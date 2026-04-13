import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootyLayout from './Layout/RootyLayout';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootyLayout />,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <h2>Home page</h2>,
      },
      {
        path: "/timeline",
        element: <h2>Timeline Page</h2>,
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
    <RouterProvider router={router} />
  </StrictMode>,
)
