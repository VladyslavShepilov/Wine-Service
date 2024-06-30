import type { Category } from '../../shared/types/category';
import './categoryCard.scss';

type Props = {
  item: Category;
};

export const CategoryCard: React.FC<Props> = ({ item }) => {
  const { title, description } = item;

  return (
    <div className="category-card">
      <div className="category-card__content">
        <div className="category-card__photo-container">
          <img
            src="\src\assets\images\wine-photo\photo1.png"
            alt="wine"
            className="category-card__photo"
          />
        </div>
        <h5 className="category-card__title">{title}</h5>
        <p className="category-card__description">{description}</p>
        <p className="category-card__discover">Discover</p>
      </div>
    </div>
  );
};
