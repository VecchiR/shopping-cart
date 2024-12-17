import GoBackButton from '../GoBackButton';
import CartContent from '../CartContent';
import { CartPageContainer, CartPageTitle } from '../../styles/CartPage.styles';


export default function CartPage() {
  return (
    <CartPageContainer>
      <CartPageTitle>Your Cart</CartPageTitle>
      <GoBackButton />
      <CartContent />
    </CartPageContainer>
  );
}
