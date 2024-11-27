import { useContext, useState } from 'react';
import { CartItem } from '../../types';
import { ShopContext } from '../context/ShopContext';

const CartItemCard = ({ product, quantity }: Pick<CartItem, 'product' | 'quantity'>) => {
  const { updateCartItem, removeCartItem } = useContext(ShopContext);
  const [inputValue, setInputValue] = useState(quantity);

  const handleRemove = () => {
    removeCartItem(product.id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = parseInt(value, 10);
    setInputValue(isNaN(numberValue) ? 0 : numberValue);
  };

  const handleInputBlur = () => {
    let updatedValue = inputValue;
    if (inputValue === 0) {
      updatedValue = 1;
      setInputValue(1);
    }
    updateCartItem(product.id, updatedValue);
  };

  const handleAddButton = () => {
    const newQuantity = inputValue + 1;
    setInputValue(newQuantity);
    updateCartItem(product.id, newQuantity);
  };

  const handleSubtractButton = () => {
    const newQuantity = inputValue - 1;
    if (newQuantity > 0) {
      setInputValue(newQuantity);
      updateCartItem(product.id, newQuantity);
    }
  };

  return (
    <>
      {quantity === 0 ? null : (
        <div className="cart-item">
          <span>{product.title}</span>
          <span>${product.price.toFixed(2)}</span>
          <div className="quantity-controls">
            <button onClick={handleSubtractButton}>-</button>
            <input
              type="text"
              value={inputValue.toString()}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <button onClick={handleAddButton}>+</button>
          </div>
          <button onClick={handleRemove}>Remove</button>
          <span>
            Subtotal: ${(product.price * inputValue).toFixed(2)}
          </span>
        </div>
      )}
    </>
  );
};

export default CartItemCard;
