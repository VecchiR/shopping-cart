import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  height: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px;
  color: #333;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #4CAF50;
  margin: 0;
`;

const ProductCard = ({ title, price, image }) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Content>
    </Card>
  );
};

export default ProductCard;
