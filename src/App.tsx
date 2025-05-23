// Importaciones de Componentes
import SectionCart from './components/SectionCart.tsx'

// Importaciones de Hooks
import useProducts from './hooks/useProducts'
import FrontPage from './components/FrontPage'
import Category from './components/Category'

// Importaciones de interfaces
import type { ProductProps } from "./types/ProductProps.ts"


function App() {
  const { products } = useProducts<ProductProps[]>({ url: "https://fakestoreapi.com/products" })

  return (
    <>
      <FrontPage />
      <div className='mt-35'>
        <SectionCart title="Ropa para hombre" categoryName="men's clothing" products={products} />
        <SectionCart title="Joyería" categoryName="jewelery" products={products} />
        <SectionCart title="Ropa de mujer" categoryName="women's clothing" products={products} />
        <SectionCart title="Electrodomesticos" categoryName="electronics" products={products} />
      </div>
      <Category />
    </>
  )
}

export default App
