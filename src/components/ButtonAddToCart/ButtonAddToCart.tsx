import { ButtonHTMLAttributes } from "react"
import cart from "src/assets/images/svg/cart.svg"
import { SquareButton } from "src/ui/SquareButton"

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const ButtonAddToCart = ({
  className = "",
  ...props
}: Props): JSX.Element => {
  return (
    <SquareButton className={className} {...props}>
      <img src={cart} alt="Add to cart" />
    </SquareButton>
  )
}
