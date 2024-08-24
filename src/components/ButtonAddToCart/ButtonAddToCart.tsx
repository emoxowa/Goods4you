import { ButtonHTMLAttributes } from "react"
import cart from "src/assets/images/svg/cart.svg"
import { Button } from 'src/ui/Button'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  isLoading?: boolean
}

export const ButtonAddToCart = ({
  isLoading,
  className = "",
  ...props
}: Props): JSX.Element => {
  return (
    <Button className={className} {...props} variant='square' size='small' disabled={isLoading}>
      <img src={cart} alt="Add to cart" />
    </Button>
  )
}
