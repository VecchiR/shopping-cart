import { Product } from '../../types';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <>
      {product?.title && product?.price ? (
        <div>
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image ?? '/src/assets/placeholder.png'}
              alt={product.title}
            />
            <h2>{product.title}</h2>
          </Link>
          <p>${product.price.toFixed(2)}</p>
          <AddToCartButton productId={product.id} />
        </div>
      ) : null}
    </>
  );
};

export default ProductCard;
