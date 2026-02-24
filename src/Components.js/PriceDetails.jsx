import { useContext } from "react";
import CartContext from "../Context/CartContext";

const PriceDetails = () => {
  const { totalCartCount, totalAmount } = useContext(CartContext);

  return (
    <div>
      <h3>Price Details ({totalCartCount} Items)</h3>
      <h4>Total Amount(${totalAmount.toFixed(2)})</h4>{" "}
    </div>
  );
};

export default PriceDetails;
