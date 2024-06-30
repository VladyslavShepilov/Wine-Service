import { CategoryCard } from '../CategoryCard';
import './categoriesList.scss';
// import type { Category } from '../../shared/types/category';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { EffectFade } from 'swiper/modules';

import { categories } from '../../shared/constants/categories';

// type Props = {
//   items: Category[];
// };

export const CategoriesList: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
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
      {categories.map((item, index) => (
        <SwiperSlide key={index}>
          <CategoryCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
