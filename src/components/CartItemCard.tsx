import { useContext } from 'react';
import { CartItem } from '../../types';
import { ShopContext } from '../context/ShopContext';

const CartItemCard = ({ product, quantity }: Pick<CartItem, 'product' | 'quantity'>) => {
  const { updateCartItem, removeCartItem } = useContext(ShopContext);

  const handleRemove = () => {
    removeCartItem(product.id);
  };

  const handleQuantityChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    const newQuantity = isNaN(parsedValue) ? 0 : parsedValue;
    updateCartItem(product.id, newQuantity);
  };

  return (
    <>
      {quantity === 0 ? null : (
        <div className="cart-item">
          <span>{product.title}</span>
          <span>${product.price.toFixed(2)}</span>
          <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
    </>
  );
};

export default CartItemCard;
