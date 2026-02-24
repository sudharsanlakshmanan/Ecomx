import { useContext } from "react";
import CartContext from "../Context/CartContext";


const Decrement = ({id}) => {

    const { decreaseQty } = useContext(CartContext);



  return <button onClick={() => decreaseQty(id)}>-</button>;
};

export default Decrement;