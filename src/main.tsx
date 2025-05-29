import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'

// Importación las pages
import Error404 from './pages/Error404.tsx'
import ShoppingCart from './pages/ShoppingCart.tsx'

// Importaciones de Componentes
import Header from './components/Header.tsx'
import CardDetail from './pages/CardDetail.tsx'
import Footer from './components/Footer.tsx'
import FiltersCards from './pages/FiltersCards.tsx'
import Login from './pages/Login.tsx'
import ProtectedLogin from './components/ProtectedLogin.tsx'

//Importaciones de ccontexto
import { ShoppingCartProvider } from './context/ShoppingCart.tsx'
import { NotificationProvider } from './context/Notification.tsx'
import { LoginProvider } from './context/LoginContext.tsx'
import Profile from './pages/Profile.tsx'

// Componente que maneja el layout condicional
function AppLayout() {
   const location = useLocation()

   const hideHeaderFooter = ['/'].includes(location.pathname.toLowerCase())



   return (
      <>
         {!hideHeaderFooter && <Header />}

         <Routes>
            <Route path='/' element={<ProtectedLogin> <Login /> </ProtectedLogin>} />
            <Route path='/home' element={<App />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='product/:title/:id' element={<CardDetail />} />
            <Route path='/productos' element={<FiltersCards />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="*" element={<Error404 />} />
         </Routes>

         {!hideHeaderFooter && <Footer />}
      </>
   )
}

createRoot(document.getElementById('root')!).render(
   <LoginProvider>
      <ShoppingCartProvider>
         <NotificationProvider>
            <BrowserRouter>
               <AppLayout />
            </BrowserRouter>
         </NotificationProvider>
      </ShoppingCartProvider>
   </LoginProvider>
)