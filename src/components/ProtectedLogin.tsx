import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
export default function ProtectedLogin({ children }: { children: React.ReactNode }) {
    const context = useContext(LoginContext)
    if (context.valor.success) return <Navigate to="/home" />
    return children
}