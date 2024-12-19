import { useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartModal from './CartModal';

type Props = {
  productId: number;
};

const AddToCartButton = ({ productId }: Props) => {
  const { addProductToCart } = useContext(ShopContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addProductToCart(productId, 1);
    setIsModalOpen(true);
  };

  return (
    <>
      <button className='border-2 py-2 px-4' onClick={handleAddToCart}>Add to cart</button>
      {isModalOpen && <CartModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default AddToCartButton;
