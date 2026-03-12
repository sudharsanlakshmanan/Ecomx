import { useContext } from "react";
import CartContext from "../Context/CartContext";
import "./CartDetails.css";
import Decrement from "../ReusableComponents/Decrement";
import Increment from "../ReusableComponents/Increment";
import { Link } from "react-router-dom";
import PriceDetails from "./PriceDetails";
import { SearchContext } from "../Context/SearchProvider";

const CartDetails = () => {
  const { cart, totalCartCount, } = useContext(CartContext);

  const { searchTerm } = useContext(SearchContext);

  const filteredCartProducts = cart.filter(
  (product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
      {filteredCartProducts.length === 0 ? (
        <div className="cartEmpty">
          <h1>Your cart is empty</h1>
          <Link to="/Products">Explore Products</Link>
        </div>
      ) : (
        filteredCartProducts.map((product) => (
          <div key={product.id} className="cart-card">
            <img
              src={product.image}
              alt={product.title}
              className="cart-image"
            />
            <div>
              <h3>{product.title}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${(product.price * product.quantity).toFixed(2)}</p>
              <Decrement id={product.id} />
              <span>{product.quantity}</span>
              <Increment id={product.id} />
            </div>
          </div>
        ))
      )}
      <div>
        {cart.length > 0 &&
        <PriceDetails Items={totalCartCount} />
}
        </div>
    </div>
  );
};
export default CartDetails;
