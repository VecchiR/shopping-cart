import { Product } from '../../types/index';

export default function ProductDetails(product: Product) {
  if (!product) {
    return null;
  }

  return (
    <>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </>
  );
}
