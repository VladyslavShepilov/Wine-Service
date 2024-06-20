import './app.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Slider } from './components/Slider';

const App: React.FC = () => {
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

export default App;
