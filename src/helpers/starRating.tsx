import type { StarType } from '../types/StarType'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function starRating(rate: number) {
    const puntuacion: number = rate
    // Esto es un React.ReactElement<StarType>[] - array de elementos JSX renderizados
    const starPuntuacion: React.ReactElement<StarType>[] = Array(5).fill(<FaStar />)
    const newStarPuntuación: React.ReactElement<StarType>[] = starPuntuacion.map((element: React.ReactElement<StarType>, index: number) => {
        const number = Math.trunc(puntuacion)
        if (index === number) return element = <FaStarHalfAlt key={index} />
        if (index >= number) return <FaRegStar key={index} />;
        return <FaStar key={index} />;
    })
    return newStarPuntuación
}