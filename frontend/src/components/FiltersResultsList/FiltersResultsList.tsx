import { WineCard } from '../WineCard';
import './filtersResultsList.scss';

import { wines } from '../../shared/constants/wines';

// type Props = {
//   items: Category[];
// };

export const FiltersResultsList: React.FC = () => {
  return (
    <div className="filtersList">
      {wines.map((item, index) => (
        <WineCard key={index} item={item} />
      ))}
    </div>
  );
};
