import { SquareButton } from 'src/ui/SquareButton'
import styles from './QuantityControls.module.scss'
import minusSmall from 'src/assets/images/svg/minusSmall.svg'
import minus from 'src/assets/images/svg/minus.svg'
import plusSmall from 'src/assets/images/svg/plusSmall.svg'
import plus from 'src/assets/images/svg/plus.svg'

type Props = {
  id: number
  quantity: number
  size?: 'small' | 'medium'
  onAdd: (id: number) => void
  onRemove: (id: number) => void
}

export const QuantityControls = ({
  id,
  quantity,
  size = 'small',
  onAdd,
  onRemove,
}: Props): JSX.Element => {
  return (
    <div className={styles.controls}>
      <SquareButton
        onClick={(e) => {
          e.stopPropagation()
          onRemove(id)
        }}
        className={styles.button}
        size={size}
      >
        <img
          src={size === 'small' ? minusSmall : minus}
          alt="Decrease quantity"
        />
      </SquareButton>

      <span className={styles.quantity}>
        {quantity} {quantity === 1 ? 'item' : 'items'}
      </span>

      <SquareButton
        onClick={(e) => {
          e.stopPropagation()
          onAdd(id)
        }}
        className={styles.button}
        size={size}
      >
        <img
          src={size === 'small' ? plusSmall : plus}
          alt="Decrease quantity"
        />
      </SquareButton>
    </div>
  )
}
