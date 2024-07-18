import { Link } from 'react-router-dom';
import './buttonComponent.scss';

type Props = {
  title: string;
};

export const ButtonComponent: React.FC<Props> = ({ title }) => {
  return (
    <div className="button">
      <Link to="/" className="button__link">
        <div className="button__container">
          <div className="button__text">{title}</div>
        </div>
      </Link>
    </div>
  );
};
