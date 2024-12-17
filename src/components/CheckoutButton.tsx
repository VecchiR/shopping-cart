import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { StyledButton } from '../styles/CheckoutButton.styles';



export default function CheckoutButton() {
  const { resetCart } = useContext(ShopContext);

  const handleCheckout = () => {
    alert('Your order was placed!');
    resetCart();
  };

  return (
    <StyledButton onClick={handleCheckout}>
      Checkout
    </StyledButton>
  );
}