import { Link } from 'react-router-dom'
export default function CardsFilters() {
    const productos = [
        { id: 1, nombre: "Producto 1", detalle: "Detalle del producto 1" },
        { id: 2, nombre: "Producto 2", detalle: "Detalle del producto 2" },
        { id: 3, nombre: "Producto 3", detalle: "Detalle del producto 3" },
        { id: 4, nombre: "Producto 4", detalle: "Detalle del producto 4" },
        { id: 5, nombre: "Producto 5", detalle: "Detalle del producto 5" }
    ]
    return (
        <>
            <h1 className='text-center text-lg text-red-700 font-extrabold'>ACA VA HACER LA SECCIÓN DE LOS FILTROS DE LOS PRODUCTOS</h1>

            <ul>
                {
                    productos.map((product) => {
                        return (
                            <li key={product.id} className="mb-2">
                                <Link to={`/product/${encodeURIComponent(product.nombre)}/${product.id}`} className="text-lg text-red-500">{product.nombre}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}