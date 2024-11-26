import { Product, CartItem } from "./index";

export type ShopContextType = {
  products: Product[];
  cart: CartItem[];
  addProductToCart: (productId: number, quantity: number) => void;
};