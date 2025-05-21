import { useState } from 'react'

// Importaciones de types
import type { CategoryProps } from '../types/CategoryProps'
export default function CategorySelector({
    category,
    options,
    setCheckedInput
}: {
    category: string,
    options: CategoryProps[],
    setCheckedInput: React.Dispatch<React.SetStateAction<string>>
}) {
    const [selectedOption, setSelectedOption] = useState<string>(options[0].value)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSelectedOption(newValue);
        setCheckedInput(newValue);
    };

    return (
        <article>
            <h3 className='font-bold'>{category}</h3>
            {
                options.map((option: CategoryProps, index: number) => {
                    return (
                        <div key={index} className='flex gap-2'>
                            <input
                                type="radio"
                                id={`option-${index}`}
                                value={option.value}
                                checked={selectedOption === option.value}
                                onChange={handleChange}
                                className='accent-BGBlack'
                            />
                            <label htmlFor={`option-${index}`}>{option.title}</label>
                        </div>
                    )
                })
            }
        </article>
    )
}