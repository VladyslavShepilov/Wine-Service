import { WineInfoTagsList } from '../WineInfoTagsList';
import './wineInfoField.scss';

type Props = {
  title: string;
  tags: string[] | number;
};

export const WineInfoField: React.FC<Props> = ({ title, tags }) => {
  return (
    <div className="wineInfo-field">
      <h4 className="wineInfo-field__title">{title}</h4>
      <div className="wineInfo-field__tags-container">
        <WineInfoTagsList tags={tags} />
      </div>
    </div>
  );
};
