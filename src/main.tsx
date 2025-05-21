import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'

// Importación las pages
import Error404 from './pages/Error404.tsx'
import ShoppingCart from './pages/ShoppingCart.tsx'

// Importaciones de Componentes
import Header from './components/Header.tsx'
import CardDetail from './pages/CardDetail.tsx'
import Footer from './components/Footer.tsx'
import FiltersCards from './pages/FiltersCards.tsx'

//Importaciones de ccontexto
import { ShoppingCartProvider } from './context/ShoppingCart.tsx'
import { NotificationProvider } from './context/Notification.tsx'


createRoot(document.getElementById('root')!).render(
   <ShoppingCartProvider>
      <NotificationProvider>

         <BrowserRouter>
            {/* Barra de Navegación */}
            <Header />

            {/* Las páginas a mostrar */}
            <Routes>
               <Route path='/' element={<App />} />
               <Route path='product/:title/:id' element={<CardDetail />} />
               <Route path='/productos' element={<FiltersCards />} />
               <Route path="/shoppingCart" element={<ShoppingCart />} />
               <Route path="*" element={<Error404 />} />
            </Routes>

            {/* Pie de páginas */}
            <Footer />
         </BrowserRouter>

      </NotificationProvider>
   </ShoppingCartProvider>
)