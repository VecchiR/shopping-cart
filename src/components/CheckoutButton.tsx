import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';



export default function CheckoutButton() {
  const { resetCart } = useContext(ShopContext);

  const handleCheckout = () => {
    alert('Your order was placed!');
    resetCart();
  };

  return (
    <button onClick={handleCheckout}>
      Checkout
    </button>
  );
}