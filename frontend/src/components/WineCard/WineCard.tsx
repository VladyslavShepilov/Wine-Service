import { Link } from 'react-router-dom';
import type { Wine } from '../../shared/types/wine';
import './wineCard.scss';

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

export const WineCard: React.FC<Props> = ({ item }) => {
  const { id, title, country, type, region, volume, price } = item;

  return (
    <Link to={`/items/${id}`} classname="wine-card__link">
      <div className="wine-card">
        <div className="wine-card__content">
          <div className="wine-card__photo-container">
            <img
              src="\src\assets\images\wine-photo\photo1.png"
              alt="wine"
              className="wine-card__photo"
            />
            <div className="wine-card__circle"></div>
          </div>
          <h5 className="wine-card__title">{title}</h5>
          <p className="wine-card__description">
            {country}/{type}/{region}/{volume} ml
          </p>
          <h4 className="wine-card__price">${price}/bottle</h4>
        </div>
      </div>
    </Link>
  );
};
