import { createContext, useState, useEffect } from 'react'
import type { ShoppingProductProps } from '../types/ShoppingProductProps'

interface ShoppingCartContextProps {
    cartProducts: ShoppingProductProps[],
    // setCartProducts va a disparar una actualización de ProductProps[]
    // Manera informal setCartProducts: ()=> void
    setCartProducts: React.Dispatch<React.SetStateAction<ShoppingProductProps[]>>
}


export const ShoppingCartContext = createContext<ShoppingCartContextProps>({} as ShoppingCartContextProps)

export function ShoppingCartProvider({ children }: { children: React.ReactNode }) {
    // Función para obtener los productos del localStorage al inicializar


    const getStoredProducts = (): ShoppingProductProps[] => {
        try {
            const storedProducts = localStorage.getItem("products")
            return storedProducts ? JSON.parse(storedProducts) : []
        } catch (e) {
            console.error("Error al leer del localStorage:", e)
            return []
        }
    }

    const [cartProducts, setCartProducts] = useState<ShoppingProductProps[]>(getStoredProducts)

    // useEffect para guardar en localStorage cuando cartProducts cambie
    useEffect(() => {
        try {
            localStorage.setItem("products", JSON.stringify(cartProducts))
        } catch (error) {
            console.error("Error al guardar en localStorage:", error)
        }
    }, [cartProducts])

    return (
        <ShoppingCartContext.Provider
            value={{
                cartProducts,
                setCartProducts
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}




















/*
Diferencia entre (CU)
export const ShoppingCartContext = createContext<ShoppingCartContextProps>({} as ShoppingCartContextProps) 
export const ShoppingCartContext = createContext<ShoppingCartContextProps>({})

1. La interfaz ShoppingCartContextProps requiere dos propiedades específicas:
- cartProducts: ProductProps[]
- setCartProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>

2. Pero al inicializar con {}, le estás dando un objeto vacío que no tiene esas propiedades.

3. Al usar {} as ShoppingCartContextProps, estás diciéndole a TypeScript: "confía en mí, este objeto vacío cumplirá con el tipo requerido" aunque técnicamente no tenga esas propiedades en el momento de la inicialización.

-----------------------------------------------------
Caso1: const [cartProducts, setCartProducts] = useState<ProductProps[]>([])
Caso2: const [cartProducts, setCartProducts] = useState([] as ProductProps[])
Caso3: const [cartProducts, setCartProducts] = useState<ProductProps[]>([] as ProductProps[])

Colocar cualquiera en el Caso1 o Caso2, El caso 3  está usando ambas técnicas a la vez, lo cual funciona pero es redundante. 
*/