import { useContext } from "react";
import CartContext from "../Context/CartContext";

const Increment = ({id}) => {
    const { increaseQty } = useContext(CartContext);

    return(

        <button onClick={()=>increaseQty(id)}>+</button>
    );
}

export default Increment;