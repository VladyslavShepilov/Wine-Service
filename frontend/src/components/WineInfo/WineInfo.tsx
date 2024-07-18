// import { Link } from 'react-router-dom';
import type { Wine } from '../../shared/types/wine';
import { WineInfoQuantity } from '../WineInfoQuantity';
import { StarRating } from '../StarRating';
// import { WineInfoTagsList } from '../WineInfoTagsList';

import './wineInfo.scss';
import { WineInfoField } from '../WineInfoField';
import { ButtonComponent } from '../ButtonComponent';

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
  const {
    // id,
    title,
    country,
    type,
    aroma,
    aging,
    region,
    volume,
    description,
    price,
  } = item;

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
          <p className="wineInfo-card__main-info">
            {country}/{type}/{region}/{volume} ml
          </p>
          <StarRating />
          <WineInfoQuantity />
          <WineInfoField title={'Aroma:'} tags={aroma} />
          <WineInfoField title={'Aging:'} tags={aging} />
          <WineInfoField title={'Alcohol content:'} tags={volume} />
          <p className="wineInfo-card__description">{description}</p>
          <ButtonComponent title={'Add to cart/' + String(price) + '$'} />
        </div>
      </div>
    </div>
  );
};
