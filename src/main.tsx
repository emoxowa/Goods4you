import "./index.scss"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { router } from "src/app/routing"
import { store } from "src/app/store"
import { NotificationProvider } from "src/ui/Notification"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <NotificationProvider>
          <RouterProvider router={router} />
        </NotificationProvider>
      </HelmetProvider>
    </Provider>
  </StrictMode>,
)
