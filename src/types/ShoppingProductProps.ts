import type {ProductProps} from './ProductProps'
export interface ShoppingProductProps extends ProductProps{
    quantity: number;
    size?: string
    color?: string
}