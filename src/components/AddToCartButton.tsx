import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

type Props = {
  productId: number;
  quantity: number;
}

const AddToCartButton = ({productId, quantity}: Props) => {

  const {addProductToCart} = useContext(ShopContext);

  return (
    <button onClick={() => addProductToCart(productId, quantity)}>Add to cart</button>
  );
};

export default AddToCartButton;


