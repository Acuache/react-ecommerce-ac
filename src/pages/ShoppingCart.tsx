// Importaciones de contexto
import { ShoppingCartContext } from '../context/ShoppingCart'

// Importaciones de hooks
import { useContext, useState } from 'react'

//Importaciones de componentes 
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";



// Importaciones de Componentes
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

//Importaciones de imagenes
import shoppingEmpty from '../assets/images/shoppingEmpty.png'

export default function ShoppingCart() {
   const context = useContext(ShoppingCartContext)
   const handdleClickReduce = (id: number) => {
      const updatedProducts = context.cartProducts.map(product => {
         if (product.id === id) {
            return {
               ...product,
               quantity: product.quantity > 1 ? product.quantity - 1 : 1
            };
         }
         return product;
      });
      context.setCartProducts(updatedProducts);
   }
   const handleClickAument = (id: number) => {
      const updatedProducts = context.cartProducts.map(product => {
         if (product.id === id) {
            return {
               ...product,
               quantity: product.quantity + 1
            };
         }
         return product;
      });
      context.setCartProducts(updatedProducts);
   }

   const handleClickDelete = (id: number) => {
      const newProducts = context.cartProducts.filter(product => product.id !== id);
      context.setCartProducts(newProducts);
   }
   const total: number = context.cartProducts.reduce((acumulador, producto) => {
      return acumulador + (producto.price * producto.quantity);
   }, 0);

   const [isView, setIsView] = useState(false)
   const fecha = new Date();
   const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
   ];
   const opciones: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/Lima"
   };
   const horaPeru = fecha.toLocaleString('es-PE', opciones);
   function handleClickBuy() {
      setIsView(!isView)
   }
   function handleClickBuyModal() {
      setIsView(!isView)
      context.setCartProducts([])
   }

   return (
      <div className='m-auto max-w-7xl py-5'>
         {
            total == 0 ? (
               <div className='transition-all duration-300 flex flex-col items-center lg:flex-row-reverse mt-35'>
                  <div className='lg:basis-1/2'>
                     <img className='w-full h-full object-contain' src={shoppingEmpty} alt="Carro vacio" />
                  </div>
                  <div className='lg:basis-1/2 flex flex-col'>
                     <h1 className='transition-all duration-300  text-3xl font-bold text-TextBlack text-center lg:text-5xl'>TU CARRITO DE COMPRAS ESTÁ VACIO</h1>
                     <p className='transition-all duration-300  text-md text-center text-TextGray mt-4 lg:text-xl'>Debe agregar artículos al carrito antes de proceder al pago.</p>
                  </div>
               </div>
            ) : (
               <>
                  <h1 className='text-3xl font-extrabold ml-4 mt-15 mb-4'>Tus Productos</h1>
                  <main className='flex flex-col max-w-7xl md:flex-row mx-4 gap-3'>
                     <section className='md:basis-6/10 flex flex-col gap-3 '>
                        {
                           context.cartProducts.map((cartProduct, index) => {
                              return (
                                 <article key={index} className='flex flex-row border border-gray-500  h-28 w-full rounded-xl pr-1 overflow-hidden'>
                                    <figure className='basis-1/4 flex-grow-0 flex-shrink-0 h-full bg-BGWhite py-3 px-4 '>
                                       <img className="w-full h-full object-contain" src={cartProduct.image} alt={`Producto ${cartProduct.title} con identificador único ${cartProduct.id}`} />
                                    </figure>
                                    <div className='basis-3/4 flex-grow-0 flex-shrink-0 h-full flex flex-col justify-between p-1'>
                                       <div className=' w-full relative'>
                                          <Link to={`/product/${encodeURIComponent(cartProduct.title)}/${cartProduct.id}`}>
                                             <h2 className='transition-all duration-300 text-base font-bold truncate w-60 xl:w-120'>{cartProduct.title}</h2>
                                          </Link>
                                          <BsFillTrash3Fill onClick={() => handleClickDelete(cartProduct.id)} className='text-red-700 cursor-pointer text-xl absolute right-0 top-0' />
                                       </div>
                                       <p className='text-xs'>Tamaño: NO IMPLEMENTADO</p>
                                       <p className='text-xs'>Color: NO IMPLEMENTADO</p>
                                       <div className='flex justify-between w-full'>
                                          <p className='text-xl font-bold'>S/{cartProduct.price}</p>
                                          <div className="basis-1/4  flex w-fit text-lg md:text-xl">
                                             <button onClick={() => handdleClickReduce(cartProduct.id)} className="cursor-pointer bg-BGGray-light basis-1/5 px-2 rounded-l-xl  flex justify-center items-center md:px-4 md:py-1"><FaMinus /></button>
                                             <div className="bg-BGGray-light  basis-3/5 text-red-900  flex justify-center items-center min-w-6 md:py-1">{cartProduct.quantity}</div>
                                             <button onClick={() => handleClickAument(cartProduct.id)} className="cursor-pointer bg-BGGray-light basis-1/5 px-2 rounded-r-xl  flex justify-center items-center md:px-4 md:py-1"><FaPlus /></button>
                                          </div>
                                       </div>
                                    </div>
                                 </article>
                              )
                           })
                        }
                     </section>
                     <section className='md:basis-4/10  flex-shrink-0 border border-gray-500 rounded-xl flex flex-col p-5 h-min'>
                        <article className='flex items-center justify-between'>
                           <h2 className='text-TextGray'>SubTotal</h2>
                           <p>S/{(total).toFixed(2)}</p>
                        </article>
                        <article className='flex items-center justify-between'>
                           <h2 className='text-TextGray'>Envio</h2>
                           <p>S/20.00</p>
                        </article>
                        <div className='h-[1px] w-full bg-gray-500 my-3'></div>
                        <article className='flex items-center justify-between'>
                           <h2 className='text-TextGray'>Total</h2>
                           <p>S/{(total + 20).toFixed(2)}</p>
                        </article>
                        <button onClick={handleClickBuy} className='hover:bg-BGBlack/85 group flex items-center justify-center gap-4 bg-BGBlack text-TextWhite w-3/4 py-2 rounded-3xl mt-3 mx-auto transition-all duration-300 hover:opacity-85 cursor-pointer'>
                           <p>Comprar</p>
                           <FaArrowRight className='group-hover:animate-shake duration-2000' />
                        </button>
                        <div className={`${isView ? "block" : "hidden"} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full z-1 backdrop-blur-xs
`}>
                           <div className='fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-BGWhite  flex flex-col gap-2 text-center p-3 w-80 md:w-90 rounded-2xl shadow-2xl sm:gap-5'>
                              <IoMdCheckmarkCircleOutline className='text-green-500 text-6xl m-auto' />
                              <div>
                                 <h2 className='text-2xl font-semibold'>¡Compra exitosa!</h2>
                                 <p className='text-gray-400'>Su producto ha sido comprado correctamente</p>
                              </div>
                              <div>
                                 <p className='text-gray-400 text-sm'>Fecha y hora de la compra:</p>
                                 <p className='font-semibold'>{`${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}, ${horaPeru}`}</p>
                              </div>
                              <span className='text-gray-400'>"Gracias por utilizar nuestra página."</span>
                              <button onClick={handleClickBuyModal} className='bg-BGBlack text-BGWhite w-fit m-auto text-xl py-1 px-10 rounded-2xl cursor-pointer'>Cerrar</button>
                           </div>
                        </div>
                     </section>
                  </main>
               </>
            )
         }
      </div>
   )
}

// Por el momento ninguna observación 
/*
Observaciones:
1. colocarle un Link al titulo
2. Agregar mas propiedades, tamaño coor
3. cambiar cantidad de productos
*/