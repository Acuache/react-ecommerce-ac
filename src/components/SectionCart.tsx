import './loaderCSS.css'


// Importaciones de Componentes
import Card from '../components/Card'

// Importaciones de interfaces
import type { ProductProps } from "../types/ProductProps.ts"

// Importaciones de funciones filters
import stringUPPERCASE from '../helpers/stringToUpperCase.ts'



// import { Card } from './Card'
export default function SectionCart({ categoryName, title, products }: { categoryName: string, title: string, products: ProductProps[] }) {

   if (!products) return <span className="loader"></span>; // Ver a futuro como moverlo

   // Filtro por categoría
   const filtered = products.filter(p => p.category === categoryName);

   // Creamos una copia y la mezclamos
   const shuffled = [...filtered].sort(() => Math.random() - 0.5);

   // Obtención de los 3 primeros
   const randomFour = shuffled.slice(0, 4);
   return (
      <section className='my-10  px-4 max-w-7xl m-auto'>
         <h1 className="text-TextBlack text-3xl mb-4 font-bold text-center md:text-4xl md:mb-8">{stringUPPERCASE(title)}</h1>
         <div className='flex w-fit gap-2 overflow-x-auto m-auto md:gap-4'>
            <Card products={randomFour || []} />
         </div>
      </section>
   )
}

// HACER MEJOR EL RESPONSIVE 
/*
Observaciones:
1. No me gusta mucho el text center, arreglrlo con grid
*/