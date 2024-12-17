import { createContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, ShopContextType } from '../../types';

export const ShopContext = createContext<ShopContextType>({
  products: [],
  cartItems: [],
  addProductToCart: () => {},
  updateCartItem: () => {},
  removeCartItem: () => {},
  sortMode: 'mostRecent',
  setSortMode: () => {},
  categoryFilter: '',
  setCategoryFilter: () => {},
  priceRange: [0, Infinity],
  setPriceRange: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  resetCart: () => {},
});

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [sortMode, setSortMode] = useState('mostRecent');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  const handleRemove = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const resetCart = () => {
    setCartItems([]);
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const createCartItemObject = (product: Product, quantity: number): CartItem => ({
    product,
    quantity,
    onRemove: handleRemove,
    onQuantityChange: handleQuantityChange,
  });

  const addProductToCart = (productId: number, quantity?: number): void => {
    const cartItem = cartItems.find((item) => item.product.id === productId);
    const product = products.find((product) => product.id === productId);

    if (cartItem) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity + (quantity ?? 1) } : item
        )
      );
    } else if (product) {
      setCartItems((prevCart) => [...prevCart, createCartItemObject(product, quantity ?? 1)]);
    } else {
      console.error(`Product with ID ${productId} not found. Current products:`, products);
    }
  };

  const updateCartItem = (productId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const removeCartItem = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  return (
    <ShopContext.Provider
      value={{ 
        products, 
        cartItems, 
        addProductToCart, 
        updateCartItem, 
        removeCartItem,
        sortMode,
        setSortMode,
        resetCart,
        categoryFilter,
        setCategoryFilter,
        priceRange,
        setPriceRange,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
