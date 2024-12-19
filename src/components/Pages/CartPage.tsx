import GoBackButton from '../GoBackButton';
import CartContent from '../CartContent';
import CheckoutButton from '../CheckoutButton';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';


export default function CartPage() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className='flex-1 p-6'>
      <GoBackButton />
      <h1 className='text-6xl font-hill font-thin px-8 pt-8'>Your Cart</h1>
      <div className='py-8 px-52'>
        <CartContent isModal={false}/>
        { cartItems.length === 0 ? null : <CheckoutButton />}
      </div>
    </div>
  );
}
