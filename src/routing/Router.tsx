import { createBrowserRouter } from 'react-router-dom'
import { RouterPaths } from './routerPaths'
import { Layout } from 'src/layout'
import { CatalogPage } from 'src/pages/CatalogPage'
import { CartPage } from 'src/pages/CartPage'

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
        element: <CatalogPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: RouterPaths.PRODUCT,
        element: <div>product</div>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: RouterPaths.CART,
        element: <CartPage />,
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
