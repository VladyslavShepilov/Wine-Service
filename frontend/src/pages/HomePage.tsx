// import './app.scss';
// import { Routes, Route } from 'react-router-dom';
import { CategoriesComponent } from '../components/CategoriesComponent';
// import { CategoriesList } from '../components/CategoriesList';
import { Favorites } from '../components/Favorites';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MainSlider } from '../components/MainSlider';
// import { Slider } from '../components/Slider';

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="app">
        <Header />
        <MainSlider />
        <Favorites />
        <CategoriesComponent />
        <Footer />
      </div>
    </>
  );
};
