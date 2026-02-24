import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* <h3 className="footer-logo">ecommx</h3> */}
          <Link to="/"><span><h3 className="footer-logo">ecommx</h3></span></Link>
          <p>
            Your trusted e-commerce platform for quality products and seamless
            shopping.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Products">Products</Link></li>
            <li><Link to="/Cart">Cart</Link></li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ecommx. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
