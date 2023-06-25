import React, { Component } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Cart extends Component {
    state = {
        totalInCart:0.00
    }
    render(){
        return(
            <div className="cartContainer">
                <FontAwesomeIcon icon={faShoppingCart} id="cartIcon" />
                <p className="totalInCart">{this.props.inCartProp}</p>
                <button className="cartCommander">Commander</button>

            </div>
        )
    }
}
export default Cart;