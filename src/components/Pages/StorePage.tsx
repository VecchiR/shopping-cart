import { SideBar, StoreContainer, ProductListContainer } from '../../styles/StorePage.styles';
import FilterAndSort from '../FilterAndSort';
import ProductList from '../ProductList';

export default function StorePage() {
  return (
    <StoreContainer>
      <SideBar>
        <FilterAndSort />
      </SideBar>
      <ProductListContainer>
        <ProductList />
      </ProductListContainer>
    </StoreContainer>
  );
}
