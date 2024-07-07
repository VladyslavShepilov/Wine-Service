// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ButtonBack } from '../components/ButtonBack';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { WineInfo } from '../components/WineInfo';
import { wines } from '../shared/constants/wines';

export const WinePage: React.FC = () => {
  const { itemId } = useParams();
  const selectedId = itemId ? +itemId : 0;
  const item = wines.find(item => item.id === selectedId);

  return (
    <>
      <Header />
      <Layout>
        <ButtonBack />
        {item && <WineInfo item={item} />}
      </Layout>
      <Footer />
    </>
  );
};
