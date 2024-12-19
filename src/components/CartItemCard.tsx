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
        <>
          <span className='font-medium line-clamp-1'>{product.title}</span>
          <div className="justify-self-end border-2 flex flex-row">
            <button className='w-12' onClick={handleSubtractButton}>-</button>
            <input
            className='w-12 text-center'
              type="text"
              value={inputValue.toString()}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <button className='w-12' onClick={handleAddButton}>+</button>
          </div>
          <span>${product.price.toFixed(2)}</span>
          <span className="justify-self-end">
            Subtotal: ${(product.price * inputValue).toFixed(2)}
          </span>
          <button className='col-span-2 justify-self-end hover:underline' onClick={handleRemove}>Remove</button>
        </>
      )}
    </>
  );
};

export default CartItemCard;
