import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

import { RiVisaLine } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";

import { useContext, useId } from 'react'
import { NotificationContext } from '../context/Notification'
export default function Footer() {
    const context = useContext(NotificationContext)
    const handleClick = () => {
        const newValor: boolean = false
        context.setValor(newValor)
    }
    const inputSearch = useId()
    return (
        <footer className="bg-BGGray-light py-15 w-full flex flex-col items-center px-5 mt-50 relative pt-30">
            {/* Formulario informal */}
            {
                context.valor && (
                    <div className='transition-all duration-300 bg-BGBlack w-7/8 sm:w-6/8 lg:w-5/8 xl:w-4/8 smtext-balance text-TextWhite flex flex-col gap-7 sm:flex-row sm:justify-around sm:items-center p-4 py-6 md:px-8 rounded-2xl absolute -top-1/80 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <div className="w-full lg:basis-2/3">
                            <h2 className="text-2xl lg:text-3xl text-balance text-center font-extrabold">MANTÉNGASE AL DIA SOBRE NUESTRAS ÚLTIMAS OFERTAS</h2>
                        </div>
                        <div className="w-full lg:basis-1/3 text-md flex flex-col gap-3 items-center">
                            <div className="  w-full bg-BGWhite text-gray-500 rounded-md py-1 px-4 flex items-center gap-1">
                                <label htmlFor={inputSearch} className="cursor-pointer text-2xl"><IoIosSearch /></label>
                                <input className="w-full  outline-none" id={inputSearch} type="text" placeholder="Introduzca correo electronico" />
                            </div>
                            <button onClick={handleClick} className="w-full lg:w-full rounded-md bg-BGWhite text-TextBlack py-1 cursor-pointer ">Suscríbete</button>
                        </div>
                    </div>
                )
            }
            <section className="w-full max-w-7xl flex flex-col gap-3 md:flex-row ">
                <article className="flex flex-col gap-3 mb-4 md:basis-1/4">
                    <h2 className="text-2xl font-bold">ACUACHE</h2>
                    <p className="text-sm text-TextGray">Contamos con ropa que se adaptan a tu estilo y que te sientas orgulloso de usar. Desde hombres hasta mujeres</p>
                    <div className="flex gap-3">
                        <a href="https://github.com/Acuache" target="_blank"><FaGithub className="w-7 h-7 cursor-pointer" /></a>
                        <FaWhatsapp className="w-7 h-7 cursor-pointer" />
                        <FaLinkedin className="w-7 h-7 cursor-pointer" />
                        <FaLaptopCode className="w-7 h-7  cursor-pointer" />
                    </div>
                </article>
                <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-y-4 gap-x-3 md:basis-3/4" >
                    <article>
                        <h4 className="text-base font-bold mb-2">Atención al Cliente</h4>
                        <ul className="text-sm flex flex-col gap-1">
                            <li><p>Atención al cliente</p></li>
                            <li><p>Acuerdo de servicios de transición</p></li>
                            <li><p>Términos y condiciones</p></li>
                            <li><p>Encuentra la satisfacción de Titulo Marca</p></li>
                        </ul>
                    </article>
                    <article>
                        <h4 className="text-base font-bold mb-2">Guía de compra</h4>
                        <ul className="text-sm flex flex-col gap-1">
                            <li><p>Crear una cuenta</p></li>
                            <li><p>Pago</p></li>
                            <li><p>Envio</p></li>
                            <li><p>Protección del comprador</p></li>
                        </ul>
                    </article>
                    <article>
                        <h4 className="text-base font-bold mb-2">Colabora con nosotros</h4>
                        <ul className="text-sm flex flex-col gap-1">
                            <li><p>Colaboraciones</p></li>
                            <li><p>Programa de afiliados</p></li>
                            <li><p>Centro de dropshipp</p></li>
                            <li><p>Iniciar sesión como vendedor</p></li>
                            <li><p>Registrarme como vendedor</p></li>
                        </ul>
                    </article>
                    <article>
                        <h4 className="text-base font-bold mb-2">Conócenos</h4>
                        <ul className="text-sm flex flex-col gap-1">
                            <li><p>Trabajar con Titulo Marca</p></li>
                            <li><p>Blog</p></li>
                            <li><p>Acerca de Titulo Marca</p></li>
                            <li><p>Relación con los inversionistas</p></li>
                            <li><p>Dispositivos Titulo de la marca</p></li>
                        </ul>
                    </article>
                </section>
            </section>

            {/* <div className="border-t-2 border-red-700 w-full max-w-7xl mx-auto my-7"></div> */}
            <div className="bg-BGGray-dark w-full max-w-7xl h-[1.8px] my-8 mx-5"></div>

            <section className="w-full max-w-7xl flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between">
                <h4><span>Titulo Marca </span>&copy;2025. Todos los derechos reservados.</h4>
                <section className="flex gap-8">
                    <article className="bg-BGWhite w-14 h-10 flex justify-center items-center border border-BGGray-dark rounded-md"><RiVisaLine className="w-10 h-10" /></article>
                    <article className="bg-BGWhite w-14 h-10 flex justify-center items-center border border-BGGray-dark rounded-md"><FaApplePay className="w-10 h-10" /></article>
                    <article className="bg-BGWhite w-14 h-10 flex justify-center items-center border border-BGGray-dark rounded-md"><FaGooglePay className="w-10 h-10" /></article>
                    <article className="bg-BGWhite w-14 h-10 flex justify-center items-center border border-BGGray-dark rounded-md"><SiMastercard className="w-9 h-9" /></article>
                </section>
            </section>
        </footer>
    )
}

// FALTA COLOCAR EL CUADRO NEGRO DEL FIGMA, AGREGAR AL FUTURO Y QUE SE ELIMINE CON UN ESTADO 
/*
Observaciones:
1. Falta colocar los Link, osea que me manden a mi portafolio en los iconos de github, wasap, linkend, portafolio
2. Agregar a futuro sombras cuando paso por algo
3. Ver si funciona el de suscribirse con correo en otras páginas
*/