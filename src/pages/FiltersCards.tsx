// Importaciones de Componentes 
import { HiAdjustments } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

export default function FiltersCards() {
    const [isFilterActive, setIsFilterActive] = useState<boolean>(false);

    const toggleFilter = () => {
        setIsFilterActive(!isFilterActive);
    };

    return (
        <div className="max-w-7xl m-auto mt-20 flex flex-col md:flex-row">
            <section className="md:basis-1/4 mx-3">
                <div className={`bg-red-200 flex justify-between items-center top-20 z-10 p-3 ${isFilterActive ? "rounded-t-lg" : "rounded-lg"} transition-all duration-600 md:rounded-t-lg`}>
                    <h3 className="font-bold">FILTRO</h3>
                    <button
                        onClick={toggleFilter}
                        className="cursor-pointer transition-all duration-300 hover:scale-110 md:hidden"
                    >
                        {isFilterActive ? <IoMdClose /> : <HiAdjustments />}
                    </button>
                </div>

                {/* Contenido de los filtros en un solo div */}
                <div
                    className={`fixed left-0 right-0 z-50 shrink-0 w-full top-32 mx-3 bg-red-200 rounded-b-lg transition-all duration-500 
                        ${isFilterActive
                            ? 'max-h-[calc(100vh-140px)] opacity-100  overflow-y-auto'
                            : 'max-h-0 opacity-0 p-0 overflow-hidden'
                        } md:mx-0 md:static md:max-h-full md:opacity-100 p-2 md:overflow-y-auto`
                    }
                >
                    {/* Contenido de los filtros aquí */}
                    <p className="font-bold text-lg mb-4">Contenido de los filtros</p>
                    <div className="mt-4">
                        <div>
                            <p className="font-semibold">Categoría</p>
                            <div className="ml-2 mt-2 space-y-2">
                                <p>Opción 1</p>
                                <p>Opción 2</p>
                                <p>Opción 3</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold">Precio</p>
                            <div className="ml-2 mt-2 space-y-2">
                                <p>$0 - $50</p>
                                <p>$50 - $100</p>
                                <p>$100 - $200</p>
                                <p>$200+</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold">Tamaño</p>
                            <div className="ml-2 mt-2 space-y-2">
                                <p>S</p>
                                <p>M</p>
                                <p>L</p>
                                <p>XL</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold">Color</p>
                            <div className="ml-2 mt-2 space-y-2">
                                <p>Rojo</p>
                                <p>Negro</p>
                                <p>Azul</p>
                                <p>Blanco</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="m-3 bg-blue-300 md:basis-3/4">
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
                <h1>asdsad</h1>
            </section>
        </div>
    )
}