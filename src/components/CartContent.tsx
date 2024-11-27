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
              <CartItemCard key={item.product.id} product={item.product} quantity={item.quantity} />
            ))}
          </ul>
          <CheckoutButton />
        </>
      )}
    </>
  );
};

export default CartContent;