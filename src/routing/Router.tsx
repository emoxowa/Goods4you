import { createBrowserRouter, Link } from 'react-router-dom'
import { RouterPaths } from './routerPaths'
import { Layout } from '../layout/Layout'

function ErrorBoundary() {
  return <></>
}

export const router = createBrowserRouter([
  {
    path: RouterPaths.MAIN,
    element: <Layout />,
    children: [
      {
        path: RouterPaths.MAIN,
        element: <div>main</div>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: RouterPaths.PRODUCT,
        element: <div>product</div>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: RouterPaths.CART,
        element: <div>cart</div>,
        errorElement: <ErrorBoundary />,
      },
    ],
  },

  {
    path: RouterPaths.ERROR_404,
    element: <div>404</div>,
  },
  {
    path: RouterPaths.ERROR_500,
    element: <div>500</div>,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
])
