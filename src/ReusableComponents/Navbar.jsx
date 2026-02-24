import { Link } from "react-router-dom";
import "../ReusableComponents/Navbar.css"
import CartContext from "../Context/CartContext";
import { useContext } from "react";


const Navbar = () => {

    const {totalCartCount} = useContext(CartContext);


    return(
            <nav className="navStyle">
            <Link to="/" className="logoStyle"><img src="/src/assets/logo-ecommx.png" alt="Logo" style={{width: "100px", height: "50px"}}/></Link>
            <Link to="/Cart" className="cartStyle">Cart🛒<sup>{totalCartCount}</sup></Link>
            </nav>
    );
}
export default Navbar;