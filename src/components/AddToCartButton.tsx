
const AddToCartButton = ({addProductToCart, productId}) => {
  return (
    <button onClick={() => addProductToCart(productId)}>Add to cart</button>
  );
};

export default AddToCartButton;


