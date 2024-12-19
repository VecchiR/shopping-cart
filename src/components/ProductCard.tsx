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
        <div className="w-64 h-96 p-7 border flex flex-col justify-between">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image ?? '/src/assets/placeholder.png'}
              alt={product.title}
              className="h-48 w-full object-cover mb-2"
            />
            <h2 className="text-md font-semibold line-clamp-1">{product.title}</h2>
          </Link>
          <p className="text-base font-light">${product.price.toFixed(2)}</p>
          <AddToCartButton productId={product.id} />
        </div>
      ) : null}
    </>
  );
};

export default ProductCard;
