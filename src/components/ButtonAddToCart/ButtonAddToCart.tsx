import { ButtonHTMLAttributes } from "react"
import cart from "src/assets/images/svg/cart.svg"
import { Button } from 'src/ui/Button'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  isLoading?: boolean
  isAddButtonDisabled?: boolean
}

export const ButtonAddToCart = ({
  isLoading,
  isAddButtonDisabled,
  className = "",
  ...props
}: Props): JSX.Element => {
  return (
    <Button
      className={className}
      {...props}
      variant="square"
      size="small"
      disabled={isLoading || isAddButtonDisabled}
    >
      <img src={cart} alt="Add to cart" />
    </Button>
  )
}
