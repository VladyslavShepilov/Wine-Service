// import { Link } from 'react-router-dom';
import type { Wine } from '../../shared/types/wine';
import { StarRating } from '../StarRating';
import './wineInfo.scss';

// type Props = {
//   item: {
//     title: string;
//     country: string;
//     type: string;
//     region: string;
//     volume: number;
//     price: number;
//   };
// };

type Props = {
  item: Wine;
};

export const WineInfo: React.FC<Props> = ({ item }) => {
  const { id, title, country, type, region, volume, price } = item;

  return (
    <div className="wineInfo-card">
      <div className="wineInfo-card__content">
        <div className="wineInfo-card__photo-container">
          <img
            src="\src\assets\images\wine-photo\photo1.png"
            alt="wine"
            className="wineInfo-card__photo"
          />
        </div>
        <div className="wineInfo-card__about">
          <h2 className="wineInfo-card__title">{title}</h2>
          <p className="wineInfo-card__description">
            {country}/{type}/{region}/{volume} ml
          </p>
          <StarRating />
          {/* <h4 className="wineInfo-card__price">${price}/bottle</h4> */}
        </div>
      </div>
    </div>
  );
};
