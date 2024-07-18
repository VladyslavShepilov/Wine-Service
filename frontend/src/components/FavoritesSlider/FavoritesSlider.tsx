// import { ItemCard } from '../ItemCard/ItemCard';
// import { wines } from '../../shared/constants/wines';
import type { Wine } from '../../shared/types/wine';
import { FavoritesList } from '../FavoritesList/FavoritesList';
// import { Layout } from '../Layout';
import './favoritesSlider.scss';

type Props = {
  title: string;
  items: Wine[];
};

// const item = {
//   title: 'Chateau Ste. Michelle Cabernet Sauvignon',
//   country: 'France',
//   type: 'Red',
//   region: 'Sauvignon',
//   volume: 750,
//   price: 20,
// };

export const FavoritesSlider: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="favorites">
      <div className="favorites__content">
        <h2 className="favorites__title">{title}</h2>
        <FavoritesList items={items} />
      </div>
    </div>
  );
};
