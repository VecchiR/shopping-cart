import { Product } from "./Product";

export type CartItem = {
    product: Product;
    quantity: number;
    onRemove: (id: number) => void;
    onQuantityChange: (id: number, quantity: number) => void;
}