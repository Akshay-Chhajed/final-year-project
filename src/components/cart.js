import React from "react";
import Navbar from "./navbar";
import buy1 from '../images/buy-1.jpg';
import buy2 from "../images/buy-2.jpg";
import buy3 from "../images/buy-3.jpg";
import {Link} from "react-router-dom";
const Cart=()=> {
  return (
      <div>
          <Navbar/>
    <div class="small-container cart-page">
    <table>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
        </tr>
        <tr>
            <td><div class="cart-info">
                <img src={buy1} alt="buy"/>
                <div>
                    <p>Red Printed Tshirt</p>
                    <small>Price:$50.00</small>
                    <br/>
                    <Link to="/">Remove</Link>
                </div>
            </div></td>
            <td><input type="number" value="1"/></td>
            <td>$50.00</td>
        </tr>
        <tr>
            <td><div class="cart-info">
                <img src={buy2} alt="buy"/>
                <div>
                    <p>Red Printed Tshirt</p>
                    <small>Price:$75.00</small>
                    <br/>
                    <Link to="">Remove</Link>
                </div>
            </div></td>
            <td><input type="number" value="1"/></td>
            <td>$50.00</td>
        </tr>
        <tr>
            <td><div class="cart-info">
                <img src={buy3} alt="buy"/>
                <div>
                    <p>Red Printed Tshirt</p>
                    <small>Price:$75.00</small>
                    <br/>
                    <Link to="">Remove</Link>
                </div>
            </div></td>
            <td><input type="number" value="1"/></td>
            <td>$50.00</td>
        </tr>
    </table>
    <div class="total-price">
        <table>
            <tr>
                <td>Subtotal</td>
                <td>$200.00</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td>$35.00</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>$235.00</td>
            </tr>
        </table>
    </div>
</div>

      </div>
      
            );
}

export default Cart;
