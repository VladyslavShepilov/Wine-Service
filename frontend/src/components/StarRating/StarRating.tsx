import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              style={{ display: 'none' }}
            />
            <FaStar
              size={24}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: 'pointer' }}
            />
          </label>
        );
      })}
    </div>
  );
};
