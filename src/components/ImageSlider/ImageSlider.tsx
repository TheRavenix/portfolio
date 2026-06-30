"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./ImageSlider.module.css";
import { Button } from "../ui/Button";
import { MetaText } from "../text/MetaText";

type Props = {
  images: string[];
};

export function ImageSlider({ images = [] }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length <= 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.imageWrapper}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {images.map((src, index) => (
          <div
            key={src}
            style={{
              position: "relative",
              minWidth: "100%",
              height: "100%",
            }}
          >
            <Image
              src={src}
              alt={`Project phase view ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              priority={index === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <div className={styles.counter}>
        {(currentIndex + 1).toString().padStart(2, "0")} /{" "}
        {images.length.toString().padStart(2, "0")}
      </div>

      {images.length > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            onClick={handlePrev}
            className={styles.navButton}
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={handleNext}
            className={styles.navButton}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}
