import { Link } from 'react-router-dom';
// import { CategoriesList } from '../CategoriesList';
// import { Layout } from '../Layout';
import './buttonBack.scss';

type Props = {};

export const ButtonBack: React.FC<Props> = () => {
  return (
    <div className="button-back">
      <Link to="/" className="button-back__link">
        <button type="button" className="button-back__button">
          <img src=".\src\assets\icons\button-back.svg" alt="button back" />
        </button>
      </Link>
    </div>
  );
};
