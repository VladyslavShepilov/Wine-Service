import { Header } from '../Header';
import { MainSlider } from '../MainSlider';
import './mainWrapper.scss';

export const MainWrapper: React.FC = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <MainSlider />
    </div>
  );
};
