import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function CartBadge() {
  const { cartItems } = useContext(ShopContext);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart">
      <div>
        CartBadge <span>{totalQuantity}</span>
      </div>
    </Link>
  );
}