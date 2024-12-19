import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Product } from '../../../types/index';
import AddToCartButton from '../AddToCartButton';
import GoBackButton from '../GoBackButton';
import ProductDetails from '../ProductDetails';
import { ShopContext } from '../../context/ShopContext';


export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { products } = useContext(ShopContext);

  if (!id) {
    return <p>Oops! Item not found</p>;
  }

  const product: Product | undefined = products?.find(
    (product: Product) => product.id === parseInt(id)
  );
  if (!product) {
    return <p className='text-center text-xl'>Oops! Item not found</p>;
  }

  return (
    <div className='p-6 flex-1'>
      <GoBackButton />
      <div className='flex pt-8 px-56'>
        <img className='w-1/3 mr-8' src={product.image} alt={product.title} />
        <div className='px-12 flex flex-col gap-5 items-start'>
          <ProductDetails {...product} />
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  );
}
