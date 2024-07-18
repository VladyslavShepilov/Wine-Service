// import './app.scss';
// import { Routes, Route } from 'react-router-dom';
import { CategoriesComponent } from '../components/CategoriesComponent';
// import { CategoriesList } from '../components/CategoriesList';
import { FavoritesSlider } from '../components/FavoritesSlider';
import { Footer } from '../components/Footer';
import { Layout } from '../components/Layout';
// import { Header } from '../components/Header';
// import { MainSlider } from '../components/MainSlider';
import { MainWrapper } from '../components/MainWrapper';
import { wines } from '../shared/constants/wines';
// import { Slider } from '../components/Slider';

export const HomePage: React.FC = () => {
  return (
    <>
      <MainWrapper />
      <Layout>
        <FavoritesSlider title="Customers favorites" items={wines} />
        <CategoriesComponent />
      </Layout>
      <Footer />
    </>
  );
};
