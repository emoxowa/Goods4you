import { createContext, ReactNode, useState } from "react"

import Notification, { NotificationPlacement, NotificationType } from "./Notification"

export type NotificationContextProps = {
  showNotification: (
    type: NotificationType,
    message: string,
    placement?: NotificationPlacement,
  ) => void
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined,
)

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<{
    type: NotificationType
    message: string
    placement: NotificationPlacement
  } | null>(null)

  const showNotification = (
    type: NotificationType,
    message: string,
    placement: NotificationPlacement = "bottomLeft",
  ) => {
    setNotification({ type, message, placement })
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          placement={notification.placement}
        />
      )}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
