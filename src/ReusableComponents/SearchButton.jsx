import { useContext } from "react";
import { SearchContext } from "../Context/SearchProvider";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";


const SearchButton = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <Box className="search-box"
    
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", sm: "300px" },}}
        >
      <TextField
        variant="outlined"
        placeholder="Search products..."
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};
export default SearchButton;
