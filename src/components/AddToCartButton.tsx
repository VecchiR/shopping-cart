type Props = {
  addProductToCart: (productId: number, quantity: number) => void;
  productId: number;
  quantity: number;
}

const AddToCartButton = ({addProductToCart, productId, quantity}: Props) => {
  return (
    <button onClick={() => addProductToCart(productId, quantity)}>Add to cart</button>
  );
};

export default AddToCartButton;


