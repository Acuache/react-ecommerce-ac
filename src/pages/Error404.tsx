import error404Gif from '../assets/images/error404-gif.gif'
import { Link } from 'react-router-dom'
export default function Error404() {
    return (
        <main className=" max-w-7xl my-40 m-auto flex flex-col-reverse items-center justify-center  px-4 lg:flex-row ">
            <div className="mx-auto text-center lg:basis-1/2 ">
                {/* GIF de Error 404 */}

                {/* Títulos y mensajes */}
                <h1 className="text-center font-bold text-4xl mb-4">
                    NO SE ENCONTRÓ LA PÁGINA
                </h1>
                <Link to="/">
                    <button className='m-auto bg-BGBlack text-4xl text-TextWhite py-1 px-13 flex justify-center items-center rounded-2xl text-center cursor-pointer hover:opacity-70 hover:scale-105 transition-all duration-300'>Home</button>
                </Link>
            </div>
            <figure className="mb-8 lg:basis-1/2">
                <img
                    src={error404Gif}
                    alt="Error 404 - Página no encontrada"
                    className="w-full h-full object-cover "
                />
            </figure>
        </main>
    )
}

// NO HAY QUEJAS 
/*
Observaciones:
1. Colocarlo más bonito
*/