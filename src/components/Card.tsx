import type { StarType } from '../types/StarType'
import type { ProductProps } from "../types/ProductProps"
import { Link } from 'react-router-dom'
import starRating from '../helpers/starRating.tsx'

export default function Card({ products }: { products: ProductProps[] }) {
   return (
      <>
         {
            products.map((product: ProductProps) => {

               const arrayStarRating = starRating(product.rating.rate)

               return (
                  <article className="w-50 flex flex-col md:w-70" key={product.id}>
                     <Link to={`/product/${encodeURIComponent(product.title)}/${product.id}`}>
                        <figure className="w-full h-50 bg-BGGray-light rounded-lg p-5 md:h-70">
                           <img className="w-full h-full object-contain" src={product.image} alt={product.title} />
                        </figure>
                     </Link>
                     <Link to={`/product/${encodeURIComponent(product.title)}/${product.id}`}>
                        <h3 className="w-full whitespace-nowrap overflow-hidden text-ellipsis font-semibold md:text-xl">{product.title}</h3>
                     </Link>
                     <div className="flex items-center gap-2">
                        <div className="flex gap-1 text-amber-200">
                           {
                              arrayStarRating.map((element: React.ReactElement<StarType>) => element)
                           }
                        </div>
                        <p className='text-base md:text-lg'>{product.rating.rate}/<span>5</span></p>
                     </div>
                     <h4 className="text-xl font-semibold md:text-2xl">S/{product.price}</h4>
                  </article>
               )
            })
         }
      </>
   )
}

// FALTA COLOCAR PORCENTAJE DE DESCUENTO
/*
Observaciones:
1. Minima el tema de espacio y el tamaño de las letras
2. Each child in a list should have a unique "key" prop. arreglar eso en la linea 14
3. colocar la funcion helper
*/