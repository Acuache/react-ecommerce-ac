import './App.css'


// Importaciones de Componentes
import Card from './components/Card'
import Footer from './components/Footer'
import SectionCart from './components/SectionCart.tsx'

// Importaciones de Hooks
import useProducts from './hooks/useProducts'
import FrontPage from './components/FrontPage'
import Category from './components/Category'

// Importaciones de interfaces
import type { ProductProps } from "./types/ProductProps.ts"


function App() {
  // const { products, error, loading } = useProducts<ProductProps[]>({ url: "https://fakestoreapi.com/products" })
  const { products, error, loading } = useProducts<ProductProps[]>({ url: "https://fakestoreapi.com/products" })
  // return (
  //   <>
  //     {loading && <p>Cargando datos</p>}
  //     {error && <p>{error}</p>}
  //     <Card products={products || []} />
  //   </>
  // )
  return (
    <>
      {/* <Card products={products || []} /> */}
      <FrontPage />
      <div>
        <SectionCart title="Ropa para hombre" categoryName="men's clothing" products={products} />
        <SectionCart title="Joyería" categoryName="jewelery" products={products} />
        <SectionCart title="Ropa de mujer" categoryName="women's clothing" products={products} />
        <SectionCart title="Electrodomesticos" categoryName="electronics" products={products} />
      </div>
      <Category />
      <Footer />
    </>
  )
}

export default App
