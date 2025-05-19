// Importaciones de contexto
import { ShoppingCartContext } from '../context/ShoppingCart'

// Importaciones de hooks
import { useContext } from 'react'

//Importaciones de componentes 
import { BsFillTrash3Fill } from "react-icons/bs";

export default function ShoppingCart() {
    const context = useContext(ShoppingCartContext)
    return (
        <main>
            <h1 className='text-3xl font-extrabold'>Tus Productos</h1>
            <section>
                {
                    context.cartProducts.map((cartProduct, index) => {
                        return (
                            <article key={index} className='flex border border-BGGrayDark h-28'>
                                <figure className='basis-1/3 h-full bg-red-200 py-1'>
                                    <img className="w-full h-full object-contain" src={cartProduct.image} alt={`Producto ${cartProduct.title} con identificador único ${cartProduct.id}`} />
                                </figure>
                                <div className='basis-2/3 h-full flex flex-col justify-between'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='bg-yellow-300 text-base font-bold'>{cartProduct.title}</h2>
                                        <BsFillTrash3Fill className='text-red-700 cursor-pointer' />
                                    </div>
                                    <p className='text-xs'>Tamaño: NO IMPLEMENTADO</p>
                                    <p className='text-xs'>Color: NO IMPLEMENTADO</p>
                                    <p className='text-xl font-bold'>S/{cartProduct.price}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </main>
    )
}

// Por el momento ninguna observación 
/*
Observaciones:
1. colocarle un Link al titulo
2. Agregar mas propiedades, tamaño coor
3. cambiar cantidad de productos
*/