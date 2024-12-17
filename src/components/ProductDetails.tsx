import { Product } from '../../types/index';
import {
  ProductDetailsTitle,
  ProductDetailsPrice,
  ProductDetailsDescription,
} from '../styles/ProductPage.styles';

export default function ProductDetails(product: Product) {
  if (!product) {
    return null;
  }

  return (
    <>
      <div>
        <ProductDetailsTitle>{product.title}</ProductDetailsTitle>
        <ProductDetailsPrice>${product.price.toFixed(2)}</ProductDetailsPrice>
        <ProductDetailsDescription>{product.description}</ProductDetailsDescription>
      </div>
    </>
  );
}
