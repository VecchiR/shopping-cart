import { Product, CartItem } from "./";

export type ShopContextType = {
    products: Product[];
    cartItems: CartItem[];
    addProductToCart: (productId: number, quantity: number) => void;
    updateCartItem: (productId: number, quantity: number) => void;
    removeCartItem: (productId: number) => void;
  };