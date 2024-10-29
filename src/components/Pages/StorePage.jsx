import ProductCard from '../ProductCard';

export default function StorePage({ products }) {
  return (
    <>
      <p>THIS IS THE STOREPAGE</p>
      {products ? (
        products.map((product, index) =>
            product.category === 'electronics' ? null : (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          )
        )
      ) : (
        <p>Fetching products...</p>
      )}
    </>
  );
}
