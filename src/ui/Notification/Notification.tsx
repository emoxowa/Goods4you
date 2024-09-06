import { useEffect, useState } from "react"

import styles from "./Notification.module.scss"

export type NotificationType = "error" | "info" | "warning"
export type NotificationPlacement =
  | "top"
  | "topLeft"
  | "topRight"
  | "bottom"
  | "bottomLeft"
  | "bottomRight"

type Props  = {
  type: NotificationType
  message: string
  duration?: number
  onClose?: () => void
  placement?: NotificationPlacement 
}

const Notification = ({
  type,
  message,
  duration = 5000,
  onClose,
  placement = "topRight",
}: Props) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      if (onClose) {
        onClose()
      }
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!visible) return null

  return (
    <div
      className={`${styles.notification} ${styles[type]} ${styles[placement]}`}
    >
      <p>{message}</p>
    </div>
  )
}

export default Notification
