import React from "react";
// import { useParams } from "react-router";
import gallery1 from "../images/gallery-1.jpg";
import gallery2 from "../images/gallery-2.jpg";
import gallery3 from "../images/gallery-3.jpg";
import gallery4 from "../images/gallery-4.jpg";
import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";
import {Link} from "react-router-dom";

import Navbar from "./navbar";
 const Productdet=()=> {
    //  const {id}=useParams(null)
  return (
        <div>
        <Navbar/>
        <div className="small-container single-product">
        <div className="row">
        <div className="col-2">
            <img src={gallery1} width="100%" id="product-img" alt="product-img"/>
            <div className="small-img-row">
                <div className="small-img-col">
                    <img src={gallery1} width="100%" className="small-img" alt="gallery1"/>
                </div>
                <div className="small-img-col">
                    <img src={gallery2} width="100%" className="small-img" alt="gallery2"/>
                </div>
                <div className="small-img-col">
                    <img src={gallery3} width="100%" className="small-img" alt="gallery3"/>
                </div>
                <div className="small-img-col">
                    <img src={gallery4} width="100%" className="small-img" alt="gallery4"/>
                </div>
            </div>
        </div>
        <div className="col-2">
            <p>Home/T-Shirt</p>
            <h1>Red Printed T-Shirt by HRX</h1>
            <h4>$50.00</h4>
            <select name="" id="">
                <option value=""> Select Size</option>
                <option >XXL</option>
                <option >XL</option>
                <option >Large</option>
                <option >Medium</option>
                <option >Small</option>
            </select>
            <input type="number" value="1"/>
            <Link to="/cart" className="btn">Add to cart</Link>
            <h3>Product Details<i className="fa fa-indent"></i></h3><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium exercitationem reprehenderit incidunt error placeat facilis dolore quo ullam soluta molestias.</p>
        </div>
    </div>
</div>
 {/* tile */}
<div className="small-container">
    <div className="row row-2">
        <h2>Related Products</h2>
        <p>
            View more
        </p>
    </div>
</div>
<div className="small-container">
    <div className="row">
        <div className="col-4">
            <img src={product1} alt="product"/>
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
            <img src={product2} alt="product"/>
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
            <img src={product3} alt="product"/>
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
            <img src={product4} alt="product"/>
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
        </div>
</div>
            );
}

export default Productdet;