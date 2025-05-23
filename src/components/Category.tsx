import joyeria from '../assets/images/joyeria.png'
import ropaMujer from '../assets/images/ropa-de-mujer.png'
import ropaHomnre from '../assets/images/ropa-de-hombre.png'
import tecnologia from '../assets/images/tecnologia.png'
export default function Category() {
    return (
        <section className='max-w-7xl bg-BGGray-light p-7 rounded-2xl m-auto overflow-hidden'>
            <h2 className='text-3xl font-bold text-center mb-5'>BUSCAR POR CATEGORÍA</h2>
            <div className='transition-all duration-300 w-full max-w-7xl grid grid-cols-1 auto-rows-[180px] gap-y-5 md:grid-cols-2 sm:gap-x-5 md:p-10 lg:grid-cols-3'>
                <article className='transition-all duration-300 bg-BGWhite relative rounded-xl overflow-hidden'>
                    <h3 className='text-2xl font-bold mx-5 mt-3'>Joyas</h3>
                    <figure className='absolute  w-2/3 h-full top-0 -right-6 overflow-hidden drop-shadow-3xl'>
                        <img className='w-full h-full object-contain' src={joyeria} alt="Persona femenina posando con joyas" />
                    </figure>
                </article>
                <article className='transition-all duration-300 bg-BGWhite relative rounded-xl lg:col-span-2'>
                    <h3 className='text-2xl font-bold  mx-5 mt-3'>Ropa de Hombre</h3>
                    <figure className='absolute  w-2/3 h-full top-0 -right-10  overflow-hidden drop-shadow-3xl'>
                        <img className='w-full h-full object-contain scale-165' src={ropaHomnre} alt="Persona masculina posando" />
                    </figure>
                </article>
                <article className='transition-all duration-300 bg-BGWhite relative rounded-xl lg:col-span-2'>
                    <h3 className='text-2xl font-bold mx-5 mt-3'>Ropa de mujer</h3>
                    <figure className='absolute  w-2/3 h-full top-0 -right-10 overflow-hidden drop-shadow-3xl'>
                        <img className='w-full h-full object-contain scale-140' src={ropaMujer} alt="Persona femenina posando" />
                    </figure>
                </article>
                <article className='transition-all duration-300 bg-BGWhite relative rounded-xl'>
                    <h3 className='text-2xl font-bold mx-5 mt-3'>Tecnologia</h3>
                    <figure className='absolute  w-2/3 h-full top-0 right-0 drop-shadow-3xl'>
                        <img className='w-full h-full object-contain scale-95' src={tecnologia} alt="Conjuntos de tecnologias" />
                    </figure>
                </article>
            </div>
        </section>
    )
}

// Nada importante
/*
Observaciones:
1. investigar si existen transisción cuando paso de 2 columnas a 3 columnas, lo veo brusco
2. cambiar las imagenes de ropa de hombre y ropa mujer, buscar imagenes más anchas
3. colocar animaciones de hover, en la letra, que aparezca un linea y tambien en la imagen que haga un pequeño movimiento
4. colocar Link de react router
*/