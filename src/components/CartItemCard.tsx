import { useContext } from 'react';
import { CartItem } from '../../types';
import { ShopContext } from '../context/ShopContext';

const CartItemCard = ({ product, quantity }: Pick<CartItem, 'product' | 'quantity'>) => {

  const { updateCartItem, removeCartItem } = useContext(ShopContext);

  const handleRemove = () => {
    removeCartItem(product.id);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateCartItem(product.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <span>{product.title}</span>
      <span>${product.price.toFixed(2)}</span>
      <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItemCard;
