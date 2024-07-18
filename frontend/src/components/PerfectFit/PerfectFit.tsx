import './perfectFit.scss';

type Props = {
  title: string;
  text: string;
  src: string;
};

export const PerfectFit: React.FC<Props> = ({ title, text, src }) => {
  return (
    <div className="perfect-fit">
      <h2 className="perfect-fit__title">Perfect Fit</h2>
      <div className="perfect-fit__container">
        <img src={src} alt="perfect fit" className="perfect-fit__image" />
        <div className="perfect-fit__text-container">
          <h3 className="perfect-fit__text-title">{title}</h3>
          <div className="perfect-fit__text">{text}</div>
        </div>
      </div>
    </div>
  );
};
