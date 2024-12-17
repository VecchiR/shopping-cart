import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartItemCard from './CartItemCard';
import CheckoutButton from './CheckoutButton';
import { CartList, CartListItem } from '../styles/CartContent.styles';



const CartContent = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <CartList>
            {cartItems.map((item) => (
              <CartListItem key={item.product.id}>
                <CartItemCard product={item.product} quantity={item.quantity} />
              </CartListItem>
            ))}
          </CartList>
          <CheckoutButton />
        </>
      )}
    </>
  );
};

export default CartContent;