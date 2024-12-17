import { Product } from '../../types/index';

export default function ProductDetails(product: Product) {
  if (!product) {
    return null;
  }

  return (
    <>
      <div>
        <h2>{product.title}</h2>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
      </div>
    </>
  );
}
