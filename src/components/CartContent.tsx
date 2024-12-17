import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartItemCard from './CartItemCard';
import CheckoutButton from './CheckoutButton';



const CartContent = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.product.id}>
                <CartItemCard product={item.product} quantity={item.quantity} />
              </li>
            ))}
          </ul>
          <CheckoutButton />
        </>
      )}
    </>
  );
};

export default CartContent;