import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchProductByIdApi } from "../services/ProductServices";
import Rating from "../ReusableComponents/Rating";
import "./productDetails.css";
import CartContext from "../Context/CartContext";
import Increment from "../ReusableComponents/Increment";
import Decrement from "../ReusableComponents/Decrement";

const ProductDetails = () => {
  const { cart, addToCart } = useContext(CartContext);
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductByIdApi(id)
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product-details-container">

      <div className="image-section">
        <img src={product.image} alt={product.title} />
      </div>

     
      <div className="details-section">
        <h1>{product.title}</h1>

        <Rating rating={product.rating} />

        <h2 className="price">
          ${(product.price * (quantity || 1)).toFixed(2)}
        </h2>

        <p className="description">{product.description}</p>

        <p className="category">
          <strong>Category:</strong> {product.category}
        </p>

        {/* Quantity Controls */}
        {quantity > 0 && (
        <div className="quantity-box">
          <Decrement id={product.id} />
          <span>{quantity}</span>
          <Increment id={product.id} />
        </div>
        )}
    
        {/* Add to Cart */}
        {quantity === 0 && (
          <button className="cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
