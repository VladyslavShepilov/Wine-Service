import './app.scss';
import { Routes, Route } from 'react-router-dom';
// import { Footer } from './components/Footer';
// import { Header } from './components/Header';
// import { Slider } from './components/Slider';
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
