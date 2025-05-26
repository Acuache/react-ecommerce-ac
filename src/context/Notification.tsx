import { createContext, useState } from 'react'

interface NotificationContextProps {
    valor: boolean,
    // setValor va a disparar una actualización de un boolean
    setValor: React.Dispatch<React.SetStateAction<boolean>>
}


export const NotificationContext = createContext({} as NotificationContextProps)

export function NotificationProvider({ children }: { children: React.ReactNode }) {
    const [valor, setValor] = useState<boolean>(true)
    return (
        <NotificationContext.Provider
            value={{
                valor,
                setValor
            }}
        >
            {children}
        </NotificationContext.Provider>
    )
}

