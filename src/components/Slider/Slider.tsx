import './slider.scss';
import { useState } from 'react';

type Props = {};

const images = [
  '/src/assets/images/image1.jpg',
  '/src/assets/images/image2.jpg',
  '/src/assets/images/image3.jpg',
];

export const Slider: React.FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="slider__arrow slider__arrow--left" onClick={goToPrevious}>
        &#10094;
      </div>
      <div
        className="slider__track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slider__item" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slider__arrow slider__arrow--right" onClick={goToNext}>
        &#10095;
      </div>
    </div>
  );
};
