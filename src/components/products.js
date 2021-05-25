import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./navbar";
import product1 from "../images/product-1.jpg"
import product2 from "../images/product-2.jpg"
import product3 from "../images/product-3.jpg"
import product4 from "../images/product-4.jpg"
 const Products=()=> {
  return (
<div>
  <Navbar/>
  <div className="small-container">
    <div className ="row row-2">
        <h2>All Products</h2>
        <select >
            <option >default sorting</option>
            <option >Sort by price</option>
            <option >Sort by popularity</option>
            <option >Sort by rating</option>
            <option >Sort by sale</option>
        </select>
    </div>
    <div className="row">
      
      <div className="col-4">
      <Link to="/Productdetails/1">
            <img src={product1} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
        </div>
        <p>$50.00</p>
        </Link>
        </div>
      
        
        <div className="col-4">
            <img src={product2} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
        </div>
        <p>$50.00</p>
        </div>

        <div className="col-4">
            <img src={product3} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>

        </div>
        <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src={product4} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>

        </div>
        <p>$50.00</p>
        </div>
        </div>
    <div className="row">
        <div className="col-4">
            <img src={product1} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
        </div>
        <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src={product2} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>

        </div>
        <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src={product3} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>

        </div>
        <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src={product4} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>

        </div>
        <p>$50.00</p>
        </div>
        </div>
    <div className="row">
        <div className="col-4">
            <img src={product1} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
        </div>
        <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src={product2} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>

        </div>
        <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src={product3} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>

        </div>
        <p>$50.00</p>
        </div>
        <div className="col-4">
            <img src={product4} alt=""/>
        <h4>Red Printed T-Shirt</h4>
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>

        </div>
        <p>$50.00</p>
        </div>
        
        </div>
        <div className="page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span>
      </div>
      </div>
      </div>
            );
}

export default Products;
