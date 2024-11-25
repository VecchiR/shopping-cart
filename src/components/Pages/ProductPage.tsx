import { Product } from '../../../types/index';
import AddToCartButton from '../AddToCartButton';
import GoBackButton from '../GoBackButton';

export default function ProductPage({
  title,
  price,
  description,
  imageUrl = '/src/assets/placeholder.png',
}: Product) {
  return (
    <>
      {title && price ? (
        <div>
          <GoBackButton />
          <img src={imageUrl} alt={title} />
          <h1>{title}</h1>
          <p>${price}</p>
          <p>{description}</p>
          <AddToCartButton />
        </div>
      ) : (
        <p>Oops!</p>
      )}
    </>
  );
}
