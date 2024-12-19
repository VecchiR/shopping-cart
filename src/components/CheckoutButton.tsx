import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';



export default function CheckoutButton() {
  const { resetCart } = useContext(ShopContext);

  const handleCheckout = () => {
    alert('Your order was placed!');
    resetCart();
  };

  return (
    <button className='px-4 py-2 border-2' onClick={handleCheckout}>
      Checkout
    </button>
  );
}