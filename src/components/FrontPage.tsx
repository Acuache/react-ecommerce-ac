import imgHome from "../assets/images/imgHome.png"

import calvinKlein from '../assets/images/logo-calvinKlein.png'
import gucci from '../assets/images/logo-gucci.png'
import prada from '../assets/images/logo-prada.png'
import versace from '../assets/images/logo-versace.png'
import zara from '../assets/images/logo-zara.png'

import { Link } from 'react-router-dom'

export default function FrontPage() {
    return (
        <main className="mb-50 md:mb-0 w-full max-h-[calc(100dvh-40px)] flex flex-col items-center bg-BGGray-light mt-10">
            <div className="pt-6 w-full flex-grow flex flex-col items-center px-4 gap-2 max-w-7xl md:flex-row md:justify-center md:items-center ">
                <div className="flex-grow basis-2/3 flex flex-col gap-4 items-center transition-all duration-300 md:mt-15 md:items-start md:basis-1/3 lg:mt-0">
                    <h1 className="text-5xl font-bold text-pretty md:text-6xl">Encuentra la ropa que coincida con tu estilo</h1>
                    <p className="text-sm text-TextGray text-pretty md:text-lg">Navegue a través de nuestra amplia gama de prendas meticulosamente elaboradas, diseñadas para resaltar su individualidad y satisfacer su estilo </p>
                    <Link to="productos">
                        <button className="bg-BGBlack text-TextWhite text-base text-center max-w-sm py-3 px-10 rounded-4xl md:text-lg cursor-pointer hover:scale-105 transition-all duration-300">Comprar ahora</button>
                    </Link>
                    <section className="flex flex-wrap justify-center items-center gap-6 md:gap-2">
                        <article>
                            <span className="text-2xl font-bold md:text-3xl">+200</span>
                            <p className="text-TextGray text-xs md:text-lg">Marcas Internacionales</p>
                        </article>
                        <article className="border-x-1 border-gray-400 px-3 md:text-3xl">
                            <span className="text-2xl font-bold md:text-3xl">+2,000</span>
                            <p className="text-TextGray text-xs md:text-lg">Marcas Internacionales</p>
                        </article>
                        <article>
                            <span className="text-2xl font-bold md:text-3xl">+30,000</span>
                            <p className="text-TextGray text-xs md:text-lg">Clientes satifechos</p>
                        </article>
                    </section>
                </div>
                <figure className="flex-grow basis-1/3 flex md:basis-2/3 md:max-w-[50%] md:self-end">
                    <img className="w-full h-full object-contain" src={imgHome} alt="2 Personas Posando para la página" />
                </figure>
            </div>
            <div className=" w-full  bg-BGBlack">
                <div className="max-w-7xl flex-shrink-0 flex flex-wrap justify-center items-center gap-3 py-4 m-auto">
                    <figure className="w-1/6 h-10 p-1">
                        <img className="w-full h-full object-contain" src={versace} alt={`Logo de ${versace}`} />
                    </figure>
                    <figure className="w-1/6 h-10 p-1">
                        <img className="w-full h-full object-contain" src={zara} alt={`Logo de ${zara}`} />
                    </figure>
                    <figure className="w-1/6 h-10 p-1">
                        <img className="w-full h-full object-contain" src={gucci} alt={`Logo de ${gucci}`} />
                    </figure>
                    <figure className="w-1/6 h-10 p-1">
                        <img className="w-full h-full object-contain" src={prada} alt={`Logo de ${prada}`} />
                    </figure>
                    <figure className="w-1/6 h-10 p-1">
                        <img className="w-full h-full object-contain" src={calvinKlein} alt={`Logo de ${calvinKlein}`} />
                    </figure>
                </div>
            </div>
        </main>
    )
}

// NO HAY QUEJAS 
/*
Observaciones:
1. Falta acomodar un poco el tema de las marcas de los logos, algunos están un poco más grande que otros
2. colocar Link de react router
*/