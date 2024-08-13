import { createBrowserRouter } from "react-router-dom"
import { Layout } from "src/layout"
import { CartPage } from "src/pages/CartPage"
import { CatalogPage } from "src/pages/CatalogPage"
import { NotFoundPage } from "src/pages/NotFoundPage"
import { ProductPage } from "src/pages/ProductPage"

import { RouterPaths } from "./routerPaths"

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
    path: "*",
    element: <NotFoundPage />,
  },
])
