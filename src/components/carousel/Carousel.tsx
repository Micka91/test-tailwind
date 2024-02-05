import styles from "./Carousel.module.css";

import React, { PropsWithChildren, useEffect, useState } from "react";

interface CarrouselProps {
  displayCount?: number; // Nombre d'éléments à afficher
}

const Carousel = ({
  children = [],
  displayCount = 1,
}: PropsWithChildren<CarrouselProps>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalChildren = React.Children.count(children);

  // Dupliquez les éléments pour la continuité du défilement
  const allChildren = React.Children.toArray(children).concat(
    React.Children.toArray(children)
  );

  const itemWidth = 100 / displayCount; // Calcul de la largeur de chaque élément en pourcentage

  useEffect(() => {
    if (currentIndex >= totalChildren) {
      setCurrentIndex(0); // Réinitialise au début après avoir atteint la fin
    }
  }, [currentIndex, totalChildren]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalChildren * 2) % (totalChildren * 2)
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.button} onClick={handlePrevious}>
        Précédent
      </button>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselContent}
          style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}
        >
          {allChildren.map((child, index) => (
            <div
              className={styles.carouselItem}
              style={{ width: `${itemWidth}%` }}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <button className={styles.button} onClick={handleNext}>
        Suivant
      </button>
    </div>
  );
};

export default Carousel;
