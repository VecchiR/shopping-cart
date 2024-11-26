import { useContext } from 'react';
import ProductCard from './ProductCard';
import { ShopContext } from '../context/ShopContext';

export default function ProductList() {
  const { products } = useContext(ShopContext);

  return (
    <>
      {products ? (
        products.map((product) =>
          product.category === 'electronics' ? null : (
            <ProductCard key={product.id} product={product} />
          )
        )
      ) : (
        <p>Fetching products...</p>
      )}
    </>
  );
}
