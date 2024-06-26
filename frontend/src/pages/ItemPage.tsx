import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';

export const ItemPage: React.FC = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Slider />
        <Footer />
      </div>
    </>
  );
};
