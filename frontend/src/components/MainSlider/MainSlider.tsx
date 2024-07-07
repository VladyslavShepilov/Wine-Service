import type React from 'react';
// import BackgroundSlider from 'react-background-slider';
import './mainSlider.scss';
import { Layout } from '../Layout';
import { Link } from 'react-router-dom';

// const images = [
//   '/src/assets/images/header-slider/image4.jpg',
//   '/src/assets/images/header-slider/image5.jpg',
//   '/src/assets/images/header-slider/image6.jpg',
// ];

export const MainSlider: React.FC = () => {
  return (
    <div className="main-slider">
      <Layout>
        <div className="main-slider__content">
          <h1 className="main-slider__title">discover the wonders of wine</h1>
          <p className="main-slider__text">
            Vinsavy is here to simplify your wine search, offering
            <br />
            personalized wine recommendations tailored to your
            <br />
            preferences and needs. We help you find the perfect bottle
            <br />
            for any occasion effortlessly.
          </p>
          <Link to="/filters" className="main-slider__link--explore">
            <button type="button" className="main-slider__button--explore">
              Explore
            </button>
          </Link>
          {/* <Link to="/filters" className="main-slider__link--start">
            <button type="button" className="main-slider__button--start">
              <img
                src="\src\assets\images\icons\"
                alt="start button"
                className="main-slider__button--start-img"
              />
            </button>
          </Link> */}
        </div>
        {/* <div style={{ width: '100%', height: '400px' }}>
          <BackgroundSlider
            images={images}
            duration={5}
            transition={2}
            // classname={slider}
          />
        </div> */}
      </Layout>
    </div>
  );
};
