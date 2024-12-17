import styled from 'styled-components';

export const ProductContainer = styled.div`
  padding: 2rem;
  display: flex;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductImage = styled.img`
  width: 40%;
  height: auto;
  border-radius: 10px;
  margin-right: 2rem;
`;

export const ProductDetailsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ProductDetailsPrice = styled.p`
  font-size: 1.5rem;
  color: #4caf50;
  margin-bottom: 1rem;
`;

export const ProductDetailsDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;
