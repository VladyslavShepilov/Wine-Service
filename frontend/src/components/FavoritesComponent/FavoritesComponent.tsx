// import { ItemCard } from '../ItemCard/ItemCard';
import { wines } from '../../shared/constants/wines';
import { FavoritesList } from '../FavoritesList/FavoritesList';
import { Layout } from '../Layout';
import './favoritesComponent.scss';

type Props = {};

// const item = {
//   title: 'Chateau Ste. Michelle Cabernet Sauvignon',
//   country: 'France',
//   type: 'Red',
//   region: 'Sauvignon',
//   volume: 750,
//   price: 20,
// };

export const Favorites: React.FC<Props> = () => {
  return (
    <div className="favorites">
      <Layout>
        <div className="favorites__content">
          <h2 className="favorites__title">Customers favorites</h2>
          <FavoritesList items={wines} />
        </div>
      </Layout>
    </div>
  );
};
