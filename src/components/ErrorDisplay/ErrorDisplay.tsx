import { Button } from "src/ui/Button"

import styles from "./ErrorDisplay.module.scss"

type Props = {
  message?: string
  onRetry?: () => void
}

export const ErrorDisplay = ({
  message = "Something went wrong. Please try again.",
  onRetry,
}: Props): JSX.Element => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{message}</p>
      {onRetry && (
        <Button onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  )
}
