import { createBrowserRouter } from 'react-router-dom'
import { RouterPaths } from './routerPaths'
import { Layout } from 'src/layout'
import { CatalogPage } from 'src/pages/CatalogPage'
import { CartPage } from 'src/pages/CartPage'
import { ProductPage } from 'src/pages/ProductPage'
import { NotFoundPage } from 'src/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: RouterPaths.MAIN,
    element: <Layout />,
    children: [
      {
        path: RouterPaths.MAIN,
        element: <CatalogPage />,
        errorElement: <></>,
      },
      {
        path: RouterPaths.PRODUCT,
        element: <ProductPage />,
        errorElement: <></>,
      },
      {
        path: RouterPaths.CART,
        element: <CartPage />,
        errorElement: <></>,
      },
    ],
  },

  {
    path: RouterPaths.ERROR_404,
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
