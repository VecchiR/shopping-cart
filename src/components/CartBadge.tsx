import React, { useContext } from 'react';
import { ShopContext } from './App';

export default function CartBadge() {
  const { cart } = useContext(ShopContext); // We must pass the ShopContext object itself as an argument

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div onClick={() => console.log(cart)}>
        CartBadge <span>{totalQuantity}</span>
      </div>
    </>
  );
}
