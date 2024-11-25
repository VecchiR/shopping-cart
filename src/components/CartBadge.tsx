import React, { useContext } from 'react';
import { ShopContext } from './App';

export default function CartBadge() {

  const { cart } = useContext(ShopContext); // We must pass the ShopContext object itself as an argument


  return (
    <>
      <div onClick={() => console.log(cart)}>CartBadge <span>{cart.length}</span></div>
    </>
  );
}
