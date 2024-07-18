// import { Link } from 'react-router-dom';
// import { CategoriesList } from '../CategoriesList';
import { ButtonBack } from '../ButtonBack';
import { Layout } from '../Layout';
import './filtersText.scss';

type Props = {};

export const FiltersText: React.FC<Props> = () => {
  return (
    <div className="filters-text">
      <Layout>
        <div className="filters-text__content">
          {/* <Link to="/" className="filters-text__link--back">
            <button type="button" className="filters-text__button--back">
              <img src=".\src\assets\icons\button-back.svg" alt="button back" />
            </button>
          </Link> */}
          <ButtonBack />
          <h2 className="filters-text__title">
            All our wines from diverse regions
          </h2>
          <p className="filters-text__text">
            Discover our global selection of exceptional wines. Savor unique
            tasting <br /> experiences ranging from renowned appellations to
            rare finds. Explore premium <br /> wines from various regions
            worldwide, encompassing both white and red varieties
          </p>
          {/* <CategoriesList /> */}
        </div>
      </Layout>
    </div>
  );
};
