import type { Wine } from '../../shared/types/wine';
import './itemCard.scss';

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

export const ItemCard: React.FC<Props> = ({ item }) => {
  const { title, country, type, region, volume, price } = item;

  return (
    <div className="item-card">
      <div className="item-card__content">
        <div className="item-card__photo-container">
          <img
            src="\src\assets\images\wine-photo\photo1.png"
            alt="wine"
            className="item-card__photo"
          />
          <div className="item-card__circle"></div>
        </div>
        <h5 className="item-card__title">{title}</h5>
        <p className="item-card__description">
          {country}/{type}/{region}/{volume} ml
        </p>
        <p className="item-card__price">${price}/bottle</p>
      </div>
    </div>
  );
};
