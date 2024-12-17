import CartContent from './CartContent';
import ViewCartButton from './ViewCartButton';
import { Link } from 'react-router-dom';

type Props = {
  onClose: () => void;
};

const CartModal = ({ onClose }: Props) => {
  return (
    <dialog>
        <button onClick={onClose}>&times;</button>
        <h1>Your Cart</h1>
        <CartContent />
        <Link to="/cart">
            <ViewCartButton />
        </Link>
    </dialog>
  );
};

export default CartModal;