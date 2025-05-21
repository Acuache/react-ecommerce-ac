import '../components/loaderCSS.css'

// Importaciones de Componentes 
import { HiAdjustments } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';
import Card from '../components/Card'
import CategorySelector from '../components/CategorySelector'

// Importaciones de interfaces
import type { ProductProps } from '../types/ProductProps'

//Importaciones de hooks personalizados
import useProducts from "../hooks/useProducts";


export default function FiltersCards() {
    const { products } = useProducts<ProductProps[]>({ url: "https://fakestoreapi.com/products" })


    const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
    const toggleFilter = () => {
        setIsFilterActive(!isFilterActive);
    };


    const [filters, setFilters] = useState({
        category: "all"
    })
    const filtersProducts = (products: ProductProps[]) => {
        return products.filter((product: ProductProps) => {
            return (filters.category === "all") || (product.category === filters.category)
        })
    }

    // Lógica de los inputs checked
    const [checkedInput, setCheckedInput] = useState<string>("all")

    // Actualizar los filtros cuando cambie el input seleccionado
    useEffect(() => {
        const newFilters = {
            ...filters,
            category: checkedInput
        }
        setFilters(newFilters);
    }, [checkedInput]);

    return (
        <div className="m-3">
            <div className="max-w-7xl m-auto   mt-20 flex flex-col md:flex-row md:items-start md:justify-center">
                <section className="md:basis-1/4  bg-BGGray-light w-full rounded-lg">
                    <div className={`mx-2 flex justify-between items-center top-20 z-10 p-3 ${isFilterActive ? "rounded-lg" : "rounded-t-lg"} transition-all duration-600 md:rounded-t-lg`}>
                        <h3 className="font-bold">FILTRO</h3>
                        <button
                            onClick={toggleFilter}
                            className="cursor-pointer transition-all duration-300 hover:scale-110 md:hidden text-xl"
                        >
                            {isFilterActive ? <IoMdClose /> : <HiAdjustments />}
                        </button>
                    </div>

                    {/* Contenido de filtros*/}
                    <div
                        className={`sticky left-0 right-0 z-50 shrink-0 w-full top-32 rounded-b-lg transition-all duration-600 
                        ${isFilterActive
                                ? 'max-h-[calc(100vh-140px)] opacity-100  overflow-y-auto'
                                : 'max-h-0 opacity-0 p-0 overflow-hidden '
                            }  md:static md:max-h-full md:opacity-100 px-2 md:overflow-y-auto bg-BGGray-light`
                        }
                    >
                        {/* Contenido de los filtros*/}
                        <section className="w-fit mx-4">
                            <CategorySelector
                                category={"Tipo de Producto"}
                                options={[
                                    { title: "Todos", value: "all" },
                                    { title: "Ropa de hombre", value: "men's clothing" },
                                    { title: "Ropa de mujer", value: "women's clothing" },
                                    { title: "Joyería", value: "jewelery" },
                                    { title: "Electrodomésticos", value: "electronics" }
                                ]}
                                setCheckedInput={setCheckedInput}
                            />
                        </section>
                    </div>
                </section>
                <section className="mt-5 w-full md:basis-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] md:gap-2 justify-items-center">
                    {
                        !products ? (
                            <div className=' m-auto w-200 h-200 flex justify-center p-30'>
                                <span className="loader w-full scale-200 "></span>
                            </div>
                        ) : <Card products={filtersProducts(products)} />
                    }
                </section>
            </div>
        </div>
    )
}