import FilterAndSort from '../FilterAndSort';
import ProductList from '../ProductList';

export default function StorePage({ products, addProductToCart }) {
  return (
    <div>
      <p>THIS IS THE STOREPAGE</p>
      <FilterAndSort/>
      <ProductList products={products} addProductToCart={addProductToCart}/>
    </div>
  );
}
