import styled from 'styled-components';
import { Product } from '../../types';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

// #region Styled Components
// const Card = styled.div`
//   width: 300px;
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: 0.3s;

//   &:hover {
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//     cursor: pointer;
//   }
// `;
// const ImageWrapper = styled.div`
//   overflow: hidden;
//   height: 200px;
// `;
// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
//   transition: transform 0.3s;

//   ${Card}:hover & {
//     transform: scale(1.1);
//   }
// `;
// const Content = styled.div`
//   padding: 20px;
// `;
// const Title = styled.h2`
//   font-size: 1.5rem;
//   margin: 0 0 10px;
//   color: #333;
// `;
// const Price = styled.p`
//   font-size: 1.2rem;
//   font-weight: bold;
//   color: #4caf50;
//   margin: 0;
// `;
// #endregion
type Props = {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      {product.title && product.price ? (
        <div className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image ?? '/src/assets/placeholder.png'} alt={product.title} />
            <h3 className="product-title">{product.title}</h3>
          </Link>
          <p className="product-price">${product.price}</p>
          <AddToCartButton productId={product.id} quantity={1}/>
        </div>
      ) : null}
    </>
  );
};

export default ProductCard;

/* this is the 'return' with styled components'

  return (
    <Card>
      <ImageWrapper>
        <Image src={imageUrl} alt={title} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Content>
    </Card>
  );

*/
