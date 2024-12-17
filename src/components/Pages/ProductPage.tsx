import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Product } from '../../../types/index';
import AddToCartButton from '../AddToCartButton';
import GoBackButton from '../GoBackButton';
import ProductDetails from '../ProductDetails';
import { ShopContext } from '../../context/ShopContext';
import {
  ProductContainer,
  ProductImage,
  ProductDetailsContainer,
} from '../../styles/ProductPage.styles';

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
    return <p>Oops! Item not found</p>;
  }

  return (
    <>
      <GoBackButton />
      <ProductContainer>
        <ProductImage src={product.image} alt={product.title} />
        <ProductDetailsContainer>
          <ProductDetails {...product} />
          <AddToCartButton productId={product.id} />
        </ProductDetailsContainer>
      </ProductContainer>
    </>
  );
}
