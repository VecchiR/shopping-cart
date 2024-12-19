import FilterAndSort from '../FilterAndSort';
import ProductList from '../ProductList';

export default function StorePage() {
  return (
    <div className="flex flex-1 gap-6 my-12 px-48">
      <FilterAndSort />
      <ProductList />
    </div>
  );
}
