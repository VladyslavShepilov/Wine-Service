import './footer.scss';

type Props = {};

export const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link">
                About us
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Contacts
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
