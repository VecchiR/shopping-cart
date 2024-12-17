import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #4caf50;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;