import React from "react";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import {Link} from "react-router-dom";
 const Navbar=()=> {
  return (
    <div className="navbar">
            <div className="logo">
                <Link to="/"><img src ={logo} width="125px" alt="logo"/></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/account">Account</Link></li>
                </ul>
            </nav>
            <Link to="/cart"><img src={cart} width="30px" height="30px" alt="cart"/></Link>
        </div>
            );
}

export default Navbar;
