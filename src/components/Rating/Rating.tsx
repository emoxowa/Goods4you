import styles from './Rating.module.scss'
import filledStarIcon from 'src/assets/images/svg/filledStar.svg'
import emptyStarIcon from 'src/assets/images/svg/emptyStar.svg'

type Props = {
  rating: number
  maxRating?: number
}

export const Rating = ({ rating, maxRating = 5 }: Props): JSX.Element => {
  const fullStars = Math.floor(rating)

  const stars = new Array(maxRating).fill(null)

  return (
    <div
      className={styles.rating}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating}`}
    >
      {stars.map((_, index) => {
        const isFull = index < fullStars
        const imgSrc = isFull ? filledStarIcon : emptyStarIcon

        return (
          <img
            key={index}
            src={imgSrc}
            alt=""
            className={styles.star}
            aria-hidden="true"
          />
        )
      })}
    </div>
  )
}
