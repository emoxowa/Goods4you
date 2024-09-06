import { memo } from "react"
import emptyStarIcon from "src/assets/images/svg/emptyStar.svg"
import filledStarIcon from "src/assets/images/svg/filledStar.svg"

import styles from "./Rating.module.scss"

type Props = {
  rating: number
  maxRating?: number
}

export const Rating = memo(({ rating, maxRating = 5 }: Props): JSX.Element => {
  const fullStars = Math.round(rating)

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
})

Rating.displayName = "Rating"