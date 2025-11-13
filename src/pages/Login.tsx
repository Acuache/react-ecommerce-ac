import logoAc from '../assets/images/logoAc.png'
import fondo from '../assets/images/fondo.avif'
import { useId, useRef, useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import type { UserProps } from '../types/User'
import { LoginContext } from '../context/LoginContext'

export default function Login() {
  const navigate = useNavigate();
  const user = useId()
  const userRef = useRef<HTMLInputElement>(null)
  const password = useId()

  // ✅ Hook en el nivel superior del componente
  const context = useContext(LoginContext)

  //Controlando de manera controlada con react el input
  const [inputDNI, setInputDNI] = useState<string>("")
  const [inputDNIError, setInputDNIError] = useState<string>("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { inputDNI, inputPassword } = Object.fromEntries(new FormData(event.currentTarget))
    if (inputDNI === "123") {
      navigate('/');
    } else {
      console.log("incorrecto")
    }
    const API_KEY = import.meta.env.VITE_API_DNI_API_KEY

    if (!API_KEY) {
      console.error("La API key no está configurada")
      setInputDNIError("Error de configuración del servidor")
      return
    }

    const url = `https://dniruc.apisperu.com/api/v1/dni/${inputDNI}?token=${API_KEY}`

    const fetchUser = async () => {
      const response = await fetch(url)
      const data: UserProps = await response.json()
      return data
    }

    const userData = await fetchUser()

    if (userData.success === true && inputPassword == "1234") {
      context.setValor(userData)
      localStorage.setItem("user", JSON.stringify(userData))
      navigate("/home")
    } else {
      setInputDNIError("* DNI NO RECONOCIDO")
    }
  }


  function handleChangeInputDNI(event: React.ChangeEvent<HTMLInputElement>) {
    const newInputDNI = event.target.value

    // Validación ANTES de actualizar estado - evitar espacios al inicio
    if (newInputDNI.startsWith(" ")) return

    setInputDNI(newInputDNI)

    // Validaciones para mostrar errores
    if (newInputDNI.length === 0) {
      setInputDNIError("* No puede estar vacio el campo")
    } else if (!/^\d+$/.test(newInputDNI)) {
      setInputDNIError("* El DNI solo debe contener números");
    } else if (newInputDNI.length != 8) {
      setInputDNIError("* El DNI debe de tener 8 caracteres");
    } else {
      setInputDNIError(""); // No hay error
    }
  }

  // Validación para habilitar/deshabilitar el botón
  const isButtonDisabled = inputDNI.length === 0 || inputDNIError.length > 0 || inputDNI.length !== 8

  return (
    <main className='md:min-h-screen flex flex-col-reverse max-w-7xl justify-center items-center m-auto md:flex-row  md:gap-5 px-5 md:px-10'>
      <div className='w-full h-full text-center mt-3 flex flex-col justify-center items-center md:basis-1/2'>
        <form className=" w-2/3 m-auto flex flex-col gap-4 md:w-full md:gap-8" onSubmit={handleSubmit}>
          <h2 className='font-extrabold text-3xl mb-5 md:text-5xl'>Iniciar Sesión</h2>
          <div>
            <div className='bg-BGGray-light flex flex-col  items-start border-l-4 border-BGBlack px-2 py-1'>
              <label className='font-bold text-lg' htmlFor={user}>DNI:</label>
              <input autoComplete="off" value={inputDNI} onChange={handleChangeInputDNI} name="inputDNI" ref={userRef} type="text" id={user} placeholder='Ingresar un DNI válido Peruano' className={`p-[2px] w-full border-b-1 outline-none transition-all duration-200 ${inputDNIError.length > 3 ? "border-red-600 focus:border-red-600" : "border-gray-300 focus:border-gray-900"}`} />
            </div>
            <p className='text-start text-sm text-red-600'>{`${inputDNIError}`}</p>
          </div>

          <div>
            <div className='bg-BGGray-light flex flex-col  items-start border-l-4 border-BGBlack px-2 py-1'>
              <label className='font-bold text-lg' htmlFor={password}>Contraseña:</label>
              <input name="inputPassword" type="password" id={password} placeholder='********' className=' p-[2px] w-full border-gray-300  border-b-1 outline-none focus:border-gray-900 transition-all duration-200' />
            </div>
            <p className='text-start text-sm'>Contraseña por defecto: 1234</p>
          </div>
          <button
            className={`w-2/3 m-auto text-2xl py-1 rounded-4xl transition-all duration-300 ${isButtonDisabled
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-black text-white hover:bg-BGBlack/75 hover:scale-105 cursor-pointer'
              }`}
            disabled={isButtonDisabled}
          >
            Continuar
          </button>
          <p>ó</p>
          <Link to="/home">
            <button
              className={`w-fit px-8 m-auto text-xl py-1 rounded-4xl transition-all duration-300 cursor-pointer bg-gray-200`}
              onClick={() => localStorage.removeItem(user)}
            >
              Iniciar sin cuenta
            </button>
          </Link>
        </form>
      </div>
      <div
        className='w-full bg-cover bg-center bg-no-repeat h-120 flex justify-center items-center md:basis-1/2 md:h-screen'
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className='py-5 w-55 md:w-80 backdrop-blur-xl rounded-4xl relative before:content-[""] before:absolute before:top-4 before:left-4 before:w-3 before:h-3 before:bg-BGBlack before:rounded-full after:content-[""] after:absolute after:bottom-4 after:right-4 after:w-3 after:h-3 after:bg-BGBlack after:rounded-full md:after:w-5 md:after:h-5  md:before:w-5 md:before:h-5'>
          <figure className='w-50 h-50 md:w-70 md:h-70'>
            <img className='w-full h-full object-contain' src={logoAc} alt="Logo de Acuache" />
          </figure>
          <h1 className='text-2xl font-bold text-center'>ACUACHE</h1>
        </div>
      </div>
    </main>
  )
}