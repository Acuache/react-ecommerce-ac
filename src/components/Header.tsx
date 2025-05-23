import './Header.css'
import { PiShoppingCartFill } from "react-icons/pi";
import { LuMenu } from "react-icons/lu";
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useContext, useId } from 'react'

import { ShoppingCartContext } from '../context/ShoppingCart'

export default function Header() {
    const inputId = useId()
    const inputIDSearch = useId()

    const context = useContext(ShoppingCartContext)
    const quantity = context.cartProducts.reduce((acumulador, producto) => {
        return acumulador + producto.quantity
    }, 0)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <header className='w-full  text-TextBlack  h-14 | fixed top-0 z-500 px-2'>
            <div className='max-w-7xl flex justify-between items-center  m-auto px-3 h-full '>
                <Link to="/" className='text-2xl font-extrabold'>ACUACHE</Link>
                <div className='flex  '>
                    <div>{quantity}</div>
                    <Link to="shoppingCart"><PiShoppingCartFill className='icon-carrito text-2xl cursor-pointer mr-3' /></Link>
                    <label className='cursor-pointer md:hidden' htmlFor={inputId}><LuMenu className='text-2xl' /></label>
                    <input className='label__input' type="checkbox" id={inputId} />
                    <nav className="label__aside bg-BGGray-dark fixed h-dvh w-70 top-0 right-0 py-4 px-0 shadow-lg z-50 | md:bg-transparent md:h-12 md:p-0 md:flex-row md:items-center md:left-1/2 md:transform md:-translate-x-1/2 md:right-none md:w-auto md:shadow-none ">
                        <ul className='flex flex-col text-xl p-6 gap-3 | md:flex-row md:items-center md:p-0 md:h-full md:gap-7 md:justify-center'>
                            <li><label className='text-2xl cursor-pointer md:hidden md:h-min' htmlFor={inputId}><IoMdClose /></label></li>
                            <li className='md:text-lg'><Link to="/">Home</Link></li>
                            <li className='md:text-lg'><Link to="/productos">Productos</Link></li>
                            <li>
                                <form onSubmit={handleSubmit} className='bg-BGWhite flex items-center border-2 border-none rounded-2xl px-3 py-1 | w-full'>
                                    <label htmlFor={inputIDSearch}><IoSearchOutline className='text-TextGray cursor-pointer' /></label>
                                    <input type="text" placeholder='Buscar producto...' id={inputIDSearch} name='search' className='text-TextGray outline-none pl-2 text-base w-full | md:w-60' />
                                </form>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

// COLOCAR NAVLINK PARA MÁS INTEREACTIVIDAD
/*
Observaciones:
1. FALTA HACER QUE EL INPUT FUNCIONE

Ejemplo de NavLink
<li><NavLink
    to="cardsfilters"
    className={({ isActive }) => isActive ? "text-green-600" : "text-red-400"}
>
    Filtro Productos
</NavLink></li>
*/