// import { categories } from '../../shared/constants/categories';
// import { CategoryCard } from '../CategoryCard';
// import { ItemList } from '../ItemList/ItemList';
import { CategoriesList } from '../CategoriesList';
import { Layout } from '../Layout';
import './categoriesComponent.scss';

type Props = {};

export const CategoriesComponent: React.FC<Props> = () => {
  return (
    <div className="categories">
      <Layout>
        <div className="categories__content">
          <h2 className="categories__title">
            Choose among different categories
          </h2>
          <CategoriesList />
        </div>
      </Layout>
    </div>
  );
};
