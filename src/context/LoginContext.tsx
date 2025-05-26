import { createContext, useState } from 'react'
import type { UserProps } from '../types/User.ts'
interface LoginContextProps {
    valor: UserProps,
    // setValor va a disparar una actualización de UserProps
    setValor: React.Dispatch<React.SetStateAction<UserProps>>
}
export const LoginContext = createContext<LoginContextProps>({} as LoginContextProps)
export function LoginProvider({ children }: { children: React.ReactNode }) {
    const getUser = (): UserProps => {
        try {
            const user = localStorage.getItem("user")
            if (!user) {
                const defaultUser: UserProps = {
                    success: false,
                    dni: "",
                    nombres: "",
                    apellidoPaterno: "",
                    apellidoMaterno: "",
                    codVerifica: 0,
                    codVerificaLetra: ""
                }
                localStorage.setItem("user", JSON.stringify(defaultUser))
                return defaultUser
            }
            return JSON.parse(user)
        } catch (e) {
            console.error("Error al leer del localStorage:", e)
            return {} as UserProps
        }
    }
    const [valor, setValor] = useState<UserProps>(getUser)


    return (
        <LoginContext.Provider
            value={{
                valor,
                setValor
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}