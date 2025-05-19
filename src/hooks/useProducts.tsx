import { useState, useEffect } from "react"

export default function useProducts<T>({ url }: { url: string }) {
    const [products, setProduct] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) throw new Error(`Error al cargar productos: ${response.status} ${response.statusText}`)
                const newProducts: T = await response.json()
                setProduct(newProducts)
            } catch (error) {
                let errorMessage: string
                if (error instanceof Error) errorMessage = error.message
                else if (typeof error === "string") errorMessage = error
                else errorMessage = "Algo salio mal"
                setError(errorMessage)
            } finally {
                const newLoading = false
                setLoading(newLoading)
            }
        }
        fetchApi()
    }, [url])

    return { products, error, loading } as { products: T, error: string | null, loading: boolean }
}


/*
response.ok
true: Si el código de estado HTTP está entre 200-299 (éxito)
false: Para cualquier otro código (404 Not Found, 500 Internal Server Error, etc)
*/