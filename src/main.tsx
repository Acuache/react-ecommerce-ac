import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'

// Importación las pages
import Error404 from './pages/Error404.tsx'
import CardsFilters from './pages/CardsFilters.tsx'
import ShoppingCart from './pages/ShoppingCart.tsx'

// Importaciones de Componentes
import Header from './components/Header.tsx'
import CardDetail from './pages/CardDetail.tsx'
import { ShoppingCartProvider } from './context/ShoppingCart.tsx'


createRoot(document.getElementById('root')!).render(
   <ShoppingCartProvider>
      <BrowserRouter>
         {/* Barra de Navegación */}
         <Header />

         {/* Las páginas a mostrar */}
         <Routes>
            <Route path='/' element={<App />} />
            <Route path='product/:title/:id' element={<CardDetail />} />
            <Route path="cardsfilters" element={<CardsFilters />} />
            <Route path="shoppingCart" element={<ShoppingCart />} />
            <Route path="*" element={<Error404 />} />
         </Routes>

         {/* Pie de páginas */}
      </BrowserRouter>
   </ShoppingCartProvider>
)