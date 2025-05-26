import { FaUserCircle } from "react-icons/fa";
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import { Link } from 'react-router-dom'

export default function Profile() {
    const context = useContext(LoginContext)

    function handleClick() {
        localStorage.removeItem("user")
        // Actualizar el contexto con usuario por defecto
        context.setValor({
            success: false,
            dni: "",
            nombres: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            codVerifica: 0,
            codVerificaLetra: ""
        })
    }

    // Verificar si hay una sesión activa basado en el success del usuario
    const isLoggedIn = context.valor.success

    return (
        <div className="mt-30 mx-auto py-5 w-[300px] md:w-[400px] flex flex-col items-center border-black border-2 rounded-lg transition-all duration-300">
            <FaUserCircle className="text-[100px] md:text-[150px] mb-4" />
            {isLoggedIn ? (
                <div className="w-full px-4">
                    <h2 className="font-bold text-xl md:text-2xl text-center">Mi cuenta</h2>
                    <p className="text-gray-400 mb-3 text-center text-sm md:text-base">Gestiona tu información personal</p>
                    <main className="w-full">
                        <div className="flex flex-col gap-5">
                            <div className="border-b border-gray-400 p-2 hover:bg-gray-100 transition-colors">
                                <span className="text-gray-600 text-sm">NOMBRES: </span>
                                <p className="font-semibold">{context.valor.nombres}</p>
                            </div>
                            <div className="border-b border-gray-400 p-2 hover:bg-gray-100 transition-colors">
                                <span className="text-gray-600 text-sm">APELLIDOS: </span>
                                <p className="font-semibold">{context.valor.apellidoPaterno} {context.valor.apellidoMaterno}</p>
                            </div>
                            <div className="border-b border-gray-400 p-2 hover:bg-gray-100 transition-colors">
                                <span className="text-gray-600 text-sm">DNI: </span>
                                <p className="font-semibold">{context.valor.dni}</p>
                            </div>
                        </div>
                    </main>
                </div>
            ) : (
                <p className="text-center text-gray-600">No hay sesión activa</p>
            )}
            <div className="w-full px-4 mt-6 flex flex-col gap-3">
                <Link to="/" className="w-full">
                    <button
                        className="w-full bg-BGBlack text-white py-2 px-4 text-lg rounded-lg cursor-pointer hover:bg-black/80 transition-colors"
                        onClick={handleClick}
                    >
                        {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
                    </button>
                </Link>
                <Link to="/home" className="w-full">
                    <button
                        className="w-full bg-white text-black py-2 px-4 text-lg rounded-lg cursor-pointer border border-black hover:bg-gray-100 transition-colors"
                    >
                        Volver a la Tienda
                    </button>
                </Link>
            </div>
        </div>
    )
}