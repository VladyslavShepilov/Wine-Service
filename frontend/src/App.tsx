import './app.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FiltersPage } from './pages/FiltersPage';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filters" element={<FiltersPage />} />
      </Routes>
    </>
  );
};

export default App;
