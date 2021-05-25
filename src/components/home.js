import React from "react";
import image1 from "../images/image1.png";
import Navbar from "./navbar";
import {Link} from "react-router-dom";
 const Home=()=> {
  return (
    <div className="header">
        <Navbar/>
        <div className="container">
        
        <div className="row">
            <div className="col-2">
                <h1>Give your Workout<br/>A new Style!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, culpa similique nulla mollitia praesentium officiis dolor asperiores temporibus. Iusto quasi blanditiis excepturi incidunt<br/> tempore eum accusantium nesciunt quisquam aut in</p>
                <Link to="/products" className="btn">Explore Now &#8594;</Link>
            </div>
            <div className="col-2">
                <img src={image1} alt="image1"/>
            </div>
        </div>
    </div>
    </div>
            );
}

export default Home;
