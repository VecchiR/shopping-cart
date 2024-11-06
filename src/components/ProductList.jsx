import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <>
      {products ? (
        products.map((product, index) =>
          product.category === 'electronics' ? null : (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              imageUrl={product.image}
            />
          )
        )
      ) : (
        <p>Fetching products...</p>
      )}
    </>
  );
}
