import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import GoBackButton from '../GoBackButton';
import CartContent from '../CartContent';

export default function CartPage() {
  return (
    <div>
      <h1>Your Cart</h1>
      <GoBackButton />
      <CartContent />
    </div>
  );
}
