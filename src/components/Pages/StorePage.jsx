import ProductList from '../ProductList';

export default function StorePage({ products }) {
  return (
    <>
      <p>THIS IS THE STOREPAGE</p>
      <ProductList products={products}/>
    </>
  );
}
