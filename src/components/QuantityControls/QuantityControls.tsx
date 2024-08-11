import { SquareButton } from 'src/ui/SquareButton'
import styles from './QuantityControls.module.scss'
import minus from 'src/assets/images/svg/minusSmall.svg'
import plus from 'src/assets/images/svg/plusSmall.svg'

type Props = {
  id: number
  quantity: number
  onAdd: (id: number) => void
  onRemove: (id: number) => void
}

export const QuantityControls = ({
  id,
  quantity,
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
      >
        <img src={minus} alt="Decrease quantity" />
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
      >
        <img src={plus} alt="Decrease quantity" />
      </SquareButton>
    </div>
  )
}
