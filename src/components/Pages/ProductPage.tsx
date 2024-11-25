import { useParams } from 'react-router-dom';
import { Product } from '../../../types/index';
import AddToCartButton from '../AddToCartButton';
import GoBackButton from '../GoBackButton';
import ProductDetails from '../ProductDetails';

export default function ProductPage({ products , addProductToCart }) {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <p>Oops! Item not found</p>;
  }

  const product = products?.find((product) => product.id === parseInt(id));
  if (!product) {
    return <p>Oops! Item not found</p>;
  }

  return (
    <>
      <GoBackButton />
      <ProductDetails {...product}/>
      <AddToCartButton addProductToCart={addProductToCart} productId={product.id}/>
    </>
  );
}
