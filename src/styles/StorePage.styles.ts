import styled from 'styled-components';

export const StoreContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductListContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

`;
