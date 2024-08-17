import { useState } from "react"

import styles from "./ProductGallery.module.scss"

type Props = {
  images: string[]
}

export const ProductGallery = ({ images }: Props): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState(images[0])

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
      {images.length > 1 &&<div className={styles.thumbnailsContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`${styles.thumbnail} ${selectedImage === image ? styles.activeThumbnail : ""}`}
            onClick={() => handleImageClick(image)}
            role="button"
          />
        ))}
      </div>}
    </div>
  )
}
