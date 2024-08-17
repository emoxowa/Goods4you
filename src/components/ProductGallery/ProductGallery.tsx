import { useState } from "react"

import styles from "./ProductGallery.module.scss"

type Props = {
  thumbnail: string
  images: string[]
}

export const ProductGallery = ({ thumbnail, images }: Props): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState(thumbnail)

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.mainImageContainer}>
        <img
          src={selectedImage}
          alt="Selected product image"
          className={styles.mainImage}
        />
      </div>
      <div className={styles.thumbnailsContainer}>
        {[thumbnail, ...images].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`${styles.thumbnail} ${selectedImage === image ? styles.activeThumbnail : ""}`}
            onClick={() => handleImageClick(image)}
            role="button"
          />
        ))}
      </div>
    </div>
  )
}
