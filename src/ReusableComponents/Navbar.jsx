import { Link } from "react-router-dom";
import "../ReusableComponents/Navbar.css"
import CartContext from "../Context/CartContext";
import { useContext } from "react";
import logo from "../assets/logo-ecommx.png"


const Navbar = () => {

    const {totalCartCount} = useContext(CartContext);


    return(
            <nav className="navStyle">
            <Link to="/" className="logoStyle"><img src={logo} alt="Logo" style={{width: "100px", height: "50px"}}/></Link>
            <Link to="/Cart" className="cartStyle">Cart🛒<sup>{totalCartCount}</sup></Link>
            </nav>
    );
}
export default Navbar;