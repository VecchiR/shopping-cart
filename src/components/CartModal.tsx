import { CartModalContainer, CartModalContent, CloseButton } from '../styles/CartModal.styles';
import CartContent from './CartContent';
import ViewCartButton from './ViewCartButton';
import { Link } from 'react-router-dom';

type Props = {
  onClose: () => void;
};

const CartModal = ({ onClose }: Props) => {
  return (
    <CartModalContainer>
      <CartModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h1>Your Cart</h1>
        <CartContent />
        <Link to="/cart">
            <ViewCartButton />
        </Link>
      </CartModalContent>
    </CartModalContainer>
  );
};

export default CartModal;