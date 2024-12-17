import { useContext } from 'react';
import ProductCard from './ProductCard';
import { ShopContext } from '../context/ShopContext';

export default function ProductList() {
  const { products, sortMode, categoryFilter, priceRange, searchQuery } = useContext(ShopContext);

  const filteredProducts = products
    .filter(product => 
      (!categoryFilter || product.category === categoryFilter) &&
      (product.price >= priceRange[0] && product.price <= priceRange[1]) &&
      (product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortMode) {
        case 'alphaAsc':
          return a.title.localeCompare(b.title);
        case 'alphaDesc':
          return b.title.localeCompare(a.title);
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        default:
          return a.id - b.id;
      }
    });

  return (
    <>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
    </>
  );
}
