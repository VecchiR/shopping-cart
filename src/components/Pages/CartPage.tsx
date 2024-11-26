import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import CartItemCard from '../CartItemCard';
import CheckoutButton from '../CheckoutButton';
import GoBackButton from '../GoBackButton';

export default function CartPage() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div>
      <h1>Your Cart</h1>
      <GoBackButton />
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
    </div>
  );
}
