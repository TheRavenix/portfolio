import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import styles from './ImageSlider.module.css'

import { Button } from '../ui/Button'

type Props = {
  images: string[]
}

export function ImageSlider({ images = [] }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (images.length <= 0) {
    return null
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.imageWrapper}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {images.map((src, index) => (
          <div
            key={src}
            style={{
              position: 'relative',
              minWidth: '100%',
              height: '100%',
            }}
          >
            <img
              src={src}
              alt={`Project image ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <div className={styles.counter}>
        {(currentIndex + 1).toString().padStart(2, '0')} /{' '}
        {images.length.toString().padStart(2, '0')}
      </div>

      {images.length > 1 && (
        <div className={styles.controls}>
          <Button
            size="icon"
            variant="secondary"
            icon={<ChevronLeftIcon />}
            onClick={handlePrev}
          />
          <Button
            size="icon"
            variant="secondary"
            icon={<ChevronRightIcon />}
            onClick={handleNext}
          />
        </div>
      )}
    </div>
  )
}
