// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ButtonBack } from '../components/ButtonBack';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { WineInfo } from '../components/WineInfo';
import { wines } from '../shared/constants/wines';
import { FavoritesSlider } from '../components/FavoritesSlider';
import { PerfectFit } from '../components/PerfectFit';
import { tastes } from '../shared/constants/taste';

export const WinePage: React.FC = () => {
  const { itemId } = useParams();
  const selectedId = itemId ? +itemId : 0;
  const item = wines.find(item => item.id === selectedId);
  const perfectFit = tastes.find(taste => taste.title === item?.perfectFit);
  const perfectFitImage = perfectFit?.src || '';

  return (
    <>
      <Header />
      <Layout>
        <ButtonBack />
        {item && <WineInfo item={item} />}
        <FavoritesSlider title="You may also like" items={wines} />
        {item && (
          <PerfectFit
            title={item.perfectFit}
            text={perfectFit?.description || ''}
            src={perfectFitImage}
          />
        )}
      </Layout>
      <Footer />
    </>
  );
};
