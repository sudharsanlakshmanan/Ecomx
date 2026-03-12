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
import { SearchContext } from "../Context/SearchProvider";
import { Button } from "@mui/material";

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

  //importing searchTerm from SearchContext to filter products based on search term
  const { searchTerm } = useContext(SearchContext);

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

  const searchedProducts = filteredProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedProducts = [...searchedProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  return (
    <div>
      <div className="filter-container">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "contained" : "outlined"}
            onClick={() => filterProductsByCategory(category)}
          >
            {category.toUpperCase()}
          </Button>
        ))}

        {/* Sorting buttons */}
        <button className="sortBtn" onClick={() => setSortOrder("lowToHigh")}>
          💲⬆
        </button>
        <button onClick={() => setSortOrder("highToLow")}>💲⬇</button>
      </div>

      <div className="container">
        {sortedProducts.length > 0 &&
          sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => navigate(`/products/${product.id}`)}
            />
          ))}
      </div>

      {sortedProducts.length === 0 && (
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          No products found
        </h3>
      )}

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

    //Using Material UI components to display products in a grid format with sorting and filtering options
    // <Container maxWidth="lg" sx={{py:4}}>
    //     {categories.map((category) => (
    //       <Button
    //         key={category}
    //         variant={activeCategory === category ? "contained" : "outlined"}
    //         onClick={() => filterProductsByCategory(category)}
    //       >
    //         {category.toUpperCase()}
    //       </Button>
    //     ))
    //     }

    //     <Box sx={{ mb: 4, display: "flex", justifyContent: "flex-end"}}>
    //       <Stack direction="row" spacing={2}>
    //         <Button variant="outlined" onClick={() => setSortOrder("lowToHigh")}>
    //           💲⬆
    //         </Button>
    //         <Button variant="outlined" onClick={() => setSortOrder("highToLow")}>
    //           💲⬇
    //         </Button>
    //       </Stack>
    //     </Box>
    //     <Grid container spacing={3} alignItems="stretch">
    //       {sortedProducts.length > 0 ? (
    //         sortedProducts.map((product) => (
    //           <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex" }} key={product.id}>
    //             <ProductCard
    //             product={product}
    //             onClick={() => navigate(`/products/${product.id}`)} />
    //           </Grid>
    //         ))
    //       ) : (
    //         <Grid item xs={12}>
    //           <Typography variant="h5" textAlign="center" sx={{ mt: 10, color: "text.secondary" }}>
    //             No products found
    //           </Typography>
    //         </Grid>
    //       )}
    //     </Grid>
    // </Container>
  );
};
export default Products;
