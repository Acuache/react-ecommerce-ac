
// Importaciones de interfaces
import type { ProductProps } from "../types/ProductProps.ts"
import type { StarType } from '../types/StarType'
import type { ShoppingProductProps } from "../types/ShoppingProductProps.ts"


// Importaciones de hooks
import { useParams } from 'react-router-dom'
import useProducts from '../hooks/useProducts.tsx'

// Importaciones de funciones helpers
import stringToUpperCase from '../helpers/stringToUpperCase.ts'
import starRating from '../helpers/starRating.tsx'
import { useState, useContext } from "react"

// Importaciones de Componentes
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

// Importaciones de contextos globales
import { ShoppingCartContext } from '../context/ShoppingCart.tsx'

export default function CardDetail() {
   const { id, nombre } = useParams()

   //Lógica de contexto global
   const context = useContext(ShoppingCartContext)
   const handleAddToCart = (product: ProductProps) => {
      if (count == 0) return
      // Convertimos al nuevo producto con más propiedades
      const shoppingProduct: ShoppingProductProps = {
         ...product,
         quantity: count,
      }
      const newCartProducts = [...context.cartProducts, shoppingProduct]

      const existingProductIndex = context.cartProducts.findIndex(item => item.id === product.id);

      if (existingProductIndex >= 0) {
         const updatedCart = [...context.cartProducts];
         updatedCart[existingProductIndex].quantity += count;
         context.setCartProducts(updatedCart);
      } else {
         context.setCartProducts(newCartProducts);
      }
   }

   //Lógica de boton
   const [count, setCount] = useState<number>(1)

   const handdleClickReduce = () => {
      const newCount = count - 1
      if (newCount < 0) return
      setCount(newCount)
   }
   const handdleClickAument = () => {
      const newCount = count + 1
      setCount(newCount)
   }

   const { products: product, error, loading } = useProducts<ProductProps>({ url: `https://fakestoreapi.com/products/${id}` })

   if (!product) return <p>Cargando...</p>;

   const arrayStarRating = starRating(product.rating.rate)

   return (
      <>
         {loading && <p>Cargando datos</p>}
         {loading && <p>Cargando datos</p>}
         {error && <p>{error}</p>}
         <main className='p-5  max-w-7xl flex flex-col  m-auto mt-15 md:mx-none md:flex-row gap-2 md:gap-5 md:h-160'>
            <div className='flex flex-col gap-5 md:flex-row-reverse md:basis-1/2'>
               <figure className='transition-all duration-300 w-full h-70 py-4 md:h-full md:p-5 md:basis-2/3 xl:p-15 bg-BGWhite border-1 rounded-xl'>
                  <img className='w-full h-full object-contain' src={product.image} alt={`Imagen de producto ${nombre} y id ${id}`} />
               </figure>
               <div className='flex gap-3 md:flex-col md:basis-1/3'>
                  <figure className='basis-1/3 h-48 p-3 bg-BGWhite border-1 rounded-xl'>
                     <img className='w-full h-full object-contain' src={product.image} alt={`Imagen de producto ${nombre} y id ${id}`} />
                  </figure>
                  <figure className='basis-1/3 h-48 p-3 bg-BGWhite border-1 rounded-xl'>
                     <img className='w-full h-full object-contain' src={product.image} alt={`Imagen de producto ${nombre} y id ${id}`} />
                  </figure>
                  <figure className='basis-1/3 h-48 p-3 bg-BGWhite border-1 rounded-xl'>
                     <img className='w-full h-full object-contain' src={product.image} alt={`Imagen de producto ${nombre} y id ${id}`} />
                  </figure>
               </div>
            </div>
            <div className='md:basis-1/2 flex flex-col gap-3'>
               <h1 className='text-2xl font-extrabold md:text-4xl'>{stringToUpperCase(product.title)}</h1>
               <div className='flex gap-2'>
                  <div className="flex gap-1 text-amber-200 items-center text-xl md:text-2xl">
                     {
                        arrayStarRating.map((element: React.ReactElement<StarType>) => element)
                     }
                  </div>
                  <p className="text-xl">{product.rating.rate}<span className="text-base text-TextGray">/5</span></p>
               </div>
               <p className='text-TextGray text-sm md:text-lg'>{product.description}</p>
               <div className='w-full h-[1px] my-1 bg-BGGray-dark'></div>
               <section>
                  <p className="text-TextGray text-lg">Seleccionar Color</p>
                  <div className='flex gap-1'>
                     <div className='h-10 w-10 rounded-full bg-black'></div>
                     <div className='h-10 w-10 rounded-full bg-black'></div>
                     <div className='h-10 w-10 rounded-full bg-black'></div>
                     <div className='h-10 w-10 rounded-full bg-black'></div>
                     <div className='h-10 w-10 rounded-full bg-black'></div>
                  </div>
               </section>
               <div className='w-full h-[1px] my-1 bg-BGGray-dark'></div>
               <section>
                  <p className='text-TextGray text-lg'>Talle</p>
                  <div className='flex gap-1'>
                     <div className='h-10 w-10 rounded-full bg-BGGray-dark flex items-center justify-center text-TextBlack'>XS</div>
                     <div className='h-10 w-10 rounded-full bg-BGGray-dark flex items-center justify-center text-TextBlack'>S</div>
                     <div className='h-10 w-10 rounded-full bg-BGGray-dark flex items-center justify-center text-TextBlack'>M</div>
                     <div className='h-10 w-10 rounded-full bg-BGGray-dark flex items-center justify-center text-TextBlack'>L</div>
                     <div className='h-10 w-10 rounded-full bg-BGGray-dark flex items-center justify-center text-TextBlack'>XL</div>
                  </div>
               </section>
               <div className='w-full h-[1px] my-1 bg-BGGray-dark'></div>
               <div className="flex  gap-2 md:gap-5">
                  <div className="basis-1/4  flex w-fit ">
                     <button onClick={handdleClickReduce} className="cursor-pointer bg-BGGray-light basis-1/5 px-2 rounded-l-xl  flex justify-center items-center"><FaMinus /></button>
                     <div className="bg-BGGray-light text-3xl basis-3/5 text-red-900  flex justify-center items-center">{count}</div>
                     <button onClick={handdleClickAument} className="cursor-pointer bg-BGGray-light basis-1/5 px-2 rounded-r-xl  flex justify-center items-center"><FaPlus /></button>
                  </div>
                  <button onClick={() => handleAddToCart(product)} className="basis-3/4 bg-BGBlack text-TextWhite rounded-2xl cursor-pointer">Agregar al carrito</button>
               </div>
            </div>
         </main >
      </>
   )
}