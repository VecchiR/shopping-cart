import ProductCard from './ProductCard';

export default function ProductList({ products, addProductToCart }) {
  return (
    <>
      {products ? (
        products.map((product, index) =>
          product.category === 'electronics' ? null : (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
              id={product.id}
              category={product.category}
              rating={product.rating}
              addProductToCart={addProductToCart}
            />
          )
        )
      ) : (
        <p>Fetching products...</p>
      )}
    </>
  );
}
