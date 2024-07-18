import './wineInfoQuantity.scss';

type Props = {};

const stock = 123;

export const WineInfoQuantity: React.FC<Props> = () => {
  return (
    <div className="quantity">
      <div className="quantity__content">
        <span className="quantity__title">Quantity</span>
        <div className="quantity__button-container">
          <button className="quantity__button">-</button>
          <div className="quantity__number">{1245464}</div>
          <button className="quantity__button">+</button>
        </div>
        <span className="quantity__stock">Current stock: {stock}</span>
      </div>
    </div>
  );
};
