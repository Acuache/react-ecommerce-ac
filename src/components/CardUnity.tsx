import type { StarType } from '../types/StarType'
import type { ProductProps } from "../types/ProductProps"
import { Link } from 'react-router-dom'
import starRating from '../helpers/starRating.tsx'

export default function Card({ product }: { product: ProductProps }) {
    const arrayStarRating = starRating(product.rating.rate)

    return (
        <article className="w-50 flex flex-col md:w-65 m-auto" key={product.id}>
            <Link to={`/product/${encodeURIComponent(product.title)}/${product.id}`}>
                <figure className="w-full h-50 bg-BGWhite border-2 border-BGGray-dark rounded-lg p-5 md:h-70">
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
                <p className='text-base md:text-lg'>{product.rating.rate}<span className='text-gray-500 text-xs'>/5.0</span></p>
            </div>
            <h4 className="text-xl font-semibold md:text-2xl">S/{product.price}</h4>
        </article>
    )
}