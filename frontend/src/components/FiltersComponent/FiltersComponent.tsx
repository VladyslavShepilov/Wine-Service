import { Link } from 'react-router-dom';
import { CategoriesList } from '../CategoriesList';
import { Laout } from '../Laout';
import './filtersComponent.scss';

type Props = {};

export const FiltersComponent: React.FC<Props> = () => {
  return (
    <div className="filters">
      <Laout>
        <div className="filters__content">
          <Link to="/" className="filters__link--back">
            <button type="button" className="filters__button--back">
              <img src="" alt="" />
            </button>
          </Link>
          <h2 className="filters__title">111</h2>
          <CategoriesList />
        </div>
      </Laout>
    </div>
  );
};
