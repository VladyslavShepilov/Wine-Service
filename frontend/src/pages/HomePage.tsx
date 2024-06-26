// import './app.scss';
// import { Routes, Route } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';

export const HomePage: React.FC = () => {
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
