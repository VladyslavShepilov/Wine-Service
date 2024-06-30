import './app.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<Slider />} /> */}
      </Routes>
    </>
  );
};

export default App;
