import { Product, CartItem } from './';

export type ShopContextType = {
  products: Product[];

  cartItems: CartItem[];

  addProductToCart: (productId: number, quantity?: number) => void;

  updateCartItem: (productId: number, quantity: number) => void;

  removeCartItem: (productId: number) => void;

  sortMode: string;

  setSortMode: (mode: string) => void;

  categoryFilter: string;

  setCategoryFilter: (category: string) => void;

  priceRange: [number, number];

  setPriceRange: (range: [number, number]) => void;

  searchQuery: string;

  setSearchQuery: (query: string) => void;

  resetCart: () => void;

};
