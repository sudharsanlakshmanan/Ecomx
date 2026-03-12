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

    //Adding Material UI Card component to display product details in a card format
    // <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
    //   <CardMedia
    //     component="img"
    //     sx={{
    //       height: 220,
    //       objectFit: "contain",
    //       p: 2,
    //       cursor: "pointer",
    //       bgcolor: "#fff",
    //     }}
    //     onClick={() => navigate(`/products/${product.id}`)}
    //     image={product.image}
    //     alt={product.title}
    //   />
    //   <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    //     <Typography variant="subtitle2" sx={{ fontWeight: 'bold', height: '3em', overflow: 'hidden', lineHeight: '1.5em', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
    //       {product.title}
    //     </Typography>
    //     <Box sx={{ mt: 'auto', pt: 1 }}>
    //     <Typography variant="h6" color="primary">
    //       ${product.price}
    //     </Typography>
    //     <Rating value={product.rating.rate}
    //   precision={0.5}
    //   readOnly
    //   size="small"
    //   />
    //   </Box>
    //   <Badge badgeContent={product.cartCount} color="primary" onClick={() => addToCart(product)}>
    //     <ShoppingCartIcon />
    //   </Badge>
    //   </CardContent>
    // </Card>
  );
};
export default ProductCard;
