import { Filters } from '../components/Filters';
import { FiltersResultsComponent } from '../components/FiltersResultsComponent';
import { FiltersText } from '../components/FiltersText';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
// import { Slider } from '../components/Slider';

export const FiltersPage: React.FC = () => {
  return (
    <>
      <Header />
      <FiltersText />
      <Filters />
      <FiltersResultsComponent />
      <Footer />
    </>
  );
};
