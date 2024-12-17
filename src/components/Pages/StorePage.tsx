import FilterAndSort from '../FilterAndSort';
import ProductList from '../ProductList';

export default function StorePage() {
  return (
    <div className="flex ">
      <FilterAndSort />
      <ProductList />
    </div>
  );
}
