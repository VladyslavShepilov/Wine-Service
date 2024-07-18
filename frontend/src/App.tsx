import './app.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FiltersPage } from './pages/FiltersPage';
import { WinePage } from './pages/WinePage';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filters" element={<FiltersPage />} />
        <Route path="/items/:itemId?" element={<WinePage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
};

export default App;
