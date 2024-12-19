import { Product } from '../../types/index';

export default function ProductDetails(product: Product) {
  if (!product) {
    return null;
  }

  return (
    <>
      <div className='flex flex-col gap-5'>
        <h2 className='text-5xl font-hill font-thin'>{product.title}</h2>
        <p className='text-4xl font-light'>${product.price.toFixed(2)}</p>
        <p className='text-lg my-6'>{product.description}</p>
      </div>
    </>
  );
}
