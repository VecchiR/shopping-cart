import FilterAndSort from '../FilterAndSort';
import ProductList from '../ProductList';

export default function StorePage() {
  return (
    <div>
      <div>
        <FilterAndSort />
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
}
