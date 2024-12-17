import { Product } from '../../types';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import {
  ProductCardContainer,
  ProductTitle,
  ProductPrice,
  ProductImage,
} from '../styles/ProductCard.styles';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <>
      {product?.title && product?.price ? (
        <ProductCardContainer>
          <Link to={`/product/${product.id}`}>
            <ProductImage
              src={product.image ?? '/src/assets/placeholder.png'}
              alt={product.title}
            />
            <ProductTitle>{product.title}</ProductTitle>
          </Link>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          <AddToCartButton productId={product.id} />
        </ProductCardContainer>
      ) : null}
    </>
  );
};

export default ProductCard;
