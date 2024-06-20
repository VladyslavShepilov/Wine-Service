import './header.scss';

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link">
                Wines
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Pairings
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Grapes
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Regions
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Awards
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
