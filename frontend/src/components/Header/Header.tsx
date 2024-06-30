import { Laout } from '../Laout';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <div className="header">
      <Laout>
        <div className="header__content">
          <Link to="/" className="header__logo">
            <img
              src="\src\assets\images\logo.png"
              alt="logo"
              className="header__logo-img"
            />
          </Link>
          <div className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink to="/" className="header__nav-link">
                  <img src="\src\assets\icons\account.png" alt="My account" />
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/" className="header__nav-link">
                  <img
                    src="\src\assets\icons\cart.png"
                    alt="My cart"
                    className="header__nav-img"
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Laout>
    </div>
  );
};
