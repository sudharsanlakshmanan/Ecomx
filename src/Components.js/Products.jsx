import "./Products.css";
import { useEffect, useState } from "react";
import {
  fetchProductsApi,
  fetchCategoriesApi,
} from "../services/ProductServices";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import ProductCard from "../ReusableComponents/ProductCard";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  //importing navigate function from react-router-dom to navigate to product details page on clicking the product image
  const navigate = useNavigate();

  //importing addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  //calling both the api in one useEffect using Promise.all
  useEffect(() => {
    Promise.all([fetchCategoriesApi(), fetchProductsApi()])
      .then(([categories, products]) => {
        setCategories(["all", ...categories]);
        setProducts(products);
        setFilteredProducts(products);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  //filtering products based on category
  const filterProductsByCategory = (selectedCategory) => {
    setActiveCategory(selectedCategory);

    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory,
      );
      setFilteredProducts(filtered);
    }
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    }
    if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  return (
    <div>
      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category}
            style={
              activeCategory === category
                ? { backgroundColor: "blue", color: "white" }
                : {}
            }
            onClick={() => filterProductsByCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}

        {/* Sorting buttons */}
        <button className="sortBtn" onClick={() => setSortOrder("lowToHigh")}>
          💲⬆
        </button>
        <button onClick={() => setSortOrder("highToLow")}>💲⬇</button>
      </div>

      <div className="container">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
export default Products;
