// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { EffectFade } from 'swiper/modules';
import { WineCard } from '../WineCard';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Wine } from '../../shared/types/wine';

import './favoritesList.scss';

type Props = {
  items: Wine[];
};

// import { wines } from '../../shared/constants/wines';

export const FavoritesList: React.FC<Props> = ({ items }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      // navigation={true}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      // effect="fade"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <WineCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
