import { useContext } from "react";
import CartContext from "../Context/CartContext";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  //importing addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="product-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <Rating rating={product.rating} />
        <button className="cartBtn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
