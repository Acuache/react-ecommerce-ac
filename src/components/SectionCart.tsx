import './loaderCSS.css'


// Importaciones de Componentes
// import Card from '../components/Card'

// Importaciones de interfaces
import type { ProductProps } from "../types/ProductProps.ts"

// Importaciones de funciones filters
import stringUPPERCASE from '../helpers/stringToUpperCase.ts'

// Cosas de Swiper 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SectionCard.css';

// import required modules
import { Pagination } from 'swiper/modules';

import CardUnity from './CardUnity.tsx'

export default function SectionCart({ categoryName, title, products }: { categoryName: string, title: string, products: ProductProps[] }) {

   if (!products) return <span className="loader"></span>;

   // Filtro por categoría
   const filtered = products.filter(p => p.category === categoryName);

   // Creamos una copia y la mezclamos
   const shuffled = [...filtered].sort(() => Math.random() - 0.5);

   // Obtención de los 3 primeros
   // const randomFour = shuffled.slice(0, 4);
   return (
      <section className='my-12  px-4 max-w-7xl m-auto '>
         <h1 className="text-TextBlack text-3xl mb-4 font-bold text-center md:text-4xl md:mb-8">{stringUPPERCASE(title)}</h1>

         {/* <Card products={randomFour || []} /> */}
         <Swiper
            className="mySwiper flex items-center w-full gap-2 overflow-x-auto m-auto md:gap-4  h-78 md:h-100 bg-red-100"
            slidesPerView={1}
            spaceBetween={5}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
            }}
            modules={[Pagination]}
         >
            {
               shuffled.map((product) => {
                  return (
                     <SwiperSlide className='flex items-center justify-center bg-green-200'><CardUnity product={product} /></SwiperSlide>
                  )
               })
            }
         </Swiper>
      </section>
   )
}

// HACER MEJOR EL RESPONSIVE 
/*
Observaciones:
1. No me gusta mucho el text center, arreglrlo con grid
*/