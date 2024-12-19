import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartContent from './CartContent';
import CheckoutButton from './CheckoutButton';
import ViewCartButton from './ViewCartButton';
import { Link } from 'react-router-dom';

type Props = {
  onClose: () => void;
};

const CartModal = ({ onClose }: Props) => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="flex justify-center items-center fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-[#0000009d]">
      <div className="bg-white m-auto p-6 border-2 border-gray-300 w-4/5 max-w-lg opacity-100 flex flex-col items-start">
        <button className="leading-[0] self-end text-3xl" onClick={onClose}>
          &times;
        </button>
        <h1 className="font-hill font-thin text-3xl mb-8">Your Cart</h1>
        <CartContent isModal={true} />
        <div>
          {cartItems.length === 0 ? null : (
            <>
              <CheckoutButton />
              <Link to="/cart">
                <ViewCartButton />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
