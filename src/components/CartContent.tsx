import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartItemCard from './CartItemCard';

type Props = {
  isModal: boolean;
};

const CartContent = ({ isModal }: Props) => {
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      {cartItems.length === 0 ? (
        <p className={`${isModal ? '' : 'text-center text-xl'} px-1`}>Your cart is empty</p>
      ) : (
        <>
          <ul
            className={`${
              isModal ? 'overflow-y-scroll max-h-[45vh] ' : ''
            } flex gap-8 flex-col mb-8 w-full scrollbar-thin `}
          >
            {cartItems.map((item) => (
              <li className={`grid grid-cols-2 border-2 p-6 items-center ${isModal ? 'gap-2' : 'gap-4'} `} key={item.product.id}>
                <CartItemCard product={item.product} quantity={item.quantity} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CartContent;
