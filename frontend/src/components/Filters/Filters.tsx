// import { Link } from 'react-router-dom';
// import { CategoriesList } from '../CategoriesList';
import { useState } from 'react';
import { Layout } from '../Layout';
import './filters.scss';

// import React from 'react';
import { useForm } from 'react-hook-form';
type Props = {};

export const Filters: React.FC<Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: (data: any) => void = data => console.log(data);
  console.log(errors);

  const [isShowMoreFilters, setIsShowMoreFilters] = useState(false);

  return (
    <div className="filters">
      <Layout>
        <div className="filters__content">
          <h3 className="filters__title">Filters</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="filters__form">
            <select {...register('Region')} className="filters__form-input">
              <option value="Region" selected disabled>
                Region
              </option>
              <option value="Bordeaux">Bordeaux</option>
              <option value=" Burgundy"> Burgundy</option>
              <option value=" California"> California</option>
              <option value=" Champagne"> Champagne</option>
              <option value=" Cognac"> Cognac</option>
              <option value=" Douro"> Douro</option>
              <option value=" Lombardy"> Lombardy</option>
              <option value=" Piedmont"> Piedmont</option>
              <option value=" Tuscany"> Tuscany</option>
              <option value=" Washington"> Washington</option>
            </select>
            <select {...register('Wine types')} className="filters__form-input">
              <option value="Wine types" selected disabled>
                Wine types
              </option>
              <option value="1">1</option>
              <option value=" 2"> 2</option>
            </select>
            <select {...register('Price')} className="filters__form-input">
              <option value="Price" selected disabled>
                Price
              </option>
              <option value="1">1</option>
              <option value=" 2"> 2</option>
            </select>
            <select {...register('Color')} className="filters__form-input">
              <option value="Color" selected disabled>
                Color
              </option>
              <option value="1">1</option>
              <option value=" 2"> 2</option>
            </select>
            <select {...register('Variety')} className="filters__form-input">
              <option value="Variety" selected disabled>
                Variety
              </option>
              <option value="1">1</option>
              <option value=" 2"> 2</option>
            </select>
            <select {...register('Taste')} className="filters__form-input">
              <option value="Taste" selected disabled>
                Taste
              </option>
              <option value="1">1</option>
              <option value=" 2"> 2</option>
            </select>
            <select {...register('Aging')} className="filters__form-input">
              <option value="Aging" selected disabled>
                Aging
              </option>
              <option value="1">1</option>
              <option value=" 2"> 2</option>
            </select>
            <select {...register('Aroma')} className="filters__form-input">
              <option value="Aroma" selected disabled>
                Aroma
              </option>
              <option value="1">1</option>
              <option value=" 2"> 2</option>
            </select>
            {isShowMoreFilters && (
              <>
                <select
                  {...register('Grape variental')}
                  className="filters__form-input"
                >
                  <option value="Grape variental" selected disabled>
                    Grape variental
                  </option>
                  <option value="1">1</option>
                  <option value=" 2"> 2</option>
                </select>
                <select
                  {...register('Producers')}
                  className="filters__form-input"
                >
                  <option value="Producers" selected disabled>
                    Producers
                  </option>
                  <option value="1">1</option>
                  <option value=" 2"> 2</option>
                </select>
                <select
                  {...register('Type clouser')}
                  className="filters__form-input"
                >
                  <option value="Type clouser" selected disabled>
                    Type clouser
                  </option>
                  <option value="1">1</option>
                  <option value=" 2"> 2</option>
                </select>
                <select
                  {...register('Organic')}
                  className="filters__form-input"
                >
                  <option value="Organic" selected disabled>
                    Organic
                  </option>
                  <option value="1">1</option>
                  <option value=" 2"> 2</option>
                </select>
                <select
                  {...register('Alcohol content')}
                  className="filters__form-input"
                >
                  <option value="Alcohol content" selected disabled>
                    Alcohol content
                  </option>
                  <option value="1">1</option>
                  <option value=" 2"> 2</option>
                </select>
                <select
                  {...register('Food pairings')}
                  className="filters__form-input"
                >
                  <option value="Food pairings" selected disabled>
                    Food pairings
                  </option>
                  <option value="1">1</option>
                  <option value=" 2"> 2</option>
                </select>
              </>
            )}
          </form>
          <div className="filters__button-container">
            <button
              type="button"
              className="filters__button"
              onClick={() => setIsShowMoreFilters(!isShowMoreFilters)}
            >
              {isShowMoreFilters ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

// type Props = {};

// export const Filters: React.FC<Props> = () => {
//   return (
//     <div className="filters">
//       <Layout>
//         <div className="filters__content">
//           <h3 className="filters__title">Filters</h3>
//           <form action="/" className="filters__form">
//             {/* <label htmlFor="region">Region</label> */}
//             {/* <select name="regiones" id="region"> */}
//             <select name="regiones" className="filters__form-input">
//               <option
//                 value=""
//                 selected
//                 disabled
//                 className="filters__form-input--option"
//               >
//                 Region
//               </option>
//               <option value="Bordeaux" className="filters__form-input--option">
//                 Bordeaux
//               </option>
//               <option value="Burgundy" className="filters__form-input--option">
//                 Burgundy
//               </option>
//             </select>

//             {/* <input type="select" className="filters__form-input">
//               Region
//             </input> */}
//           </form>
//         </div>
//       </Layout>
//     </div>
//   );
// };
