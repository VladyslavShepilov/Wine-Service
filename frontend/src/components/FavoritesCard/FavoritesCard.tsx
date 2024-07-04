import type { Wine } from '../../shared/types/wine';
import './favoritesCard.scss';

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

export const FavoritesCard: React.FC<Props> = ({ item }) => {
  const { title, country, type, region, volume, price } = item;

  return (
    <div className="favorites-card">
      <div className="favorites-card__content">
        <div className="favorites-card__photo-container">
          <img
            src="\src\assets\images\wine-photo\photo1.png"
            alt="wine"
            className="favorites-card__photo"
          />
          <div className="favorites-card__circle"></div>
        </div>
        <h5 className="favorites-card__title">{title}</h5>
        <p className="favorites-card__description">
          {country}/{type}/{region}/{volume} ml
        </p>
        <h4 className="favorites-card__price">${price}/bottle</h4>
      </div>
    </div>
  );
};
