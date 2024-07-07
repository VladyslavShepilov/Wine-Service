import { Link } from 'react-router-dom';
import { Layout } from '../Layout';
import './footer.scss';

type Props = {};

export const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      <Layout>
        <div className="footer__content">
          <div className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <Link to="/" className="footer__nav-link">
                  About us
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/" className="footer__nav-link">
                  Contacts
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/" className="footer__nav-link">
                  Terms
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/" className="footer__nav-link">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__bottom">
            <Link to="/" className="footer__logo">
              <img
                src="\src\assets\images\logo-white.svg"
                alt="logo"
                className="footer__logo-img"
              />
            </Link>
            <Link to="/" className="footer__text">
              <img
                src="\src\assets\images\footer\discover-white.svg"
                alt="lets discover"
                className="footer__logo-img"
              />
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};
