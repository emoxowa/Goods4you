import { SquareButton } from 'src/ui/SquareButton'
import cart from 'src/assets/images/svg/cart.svg'

type Props = {
  onClick: () => void
  className?: string
}

export const ButtonAddToCart = ({ onClick, className }: Props): JSX.Element => {
  return (
    <SquareButton
      onClick={onClick}
      className={className}
    >
      <img src={cart} alt="Add to cart" />
    </SquareButton>
  )
}
