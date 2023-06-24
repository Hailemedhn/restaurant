import React, {Component} from "react";
import "./Header.css";
import manny from "./images/manny.png.png";
import logo from "./images/logo.jpg";
import cart from "./images/cart.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class Header extends Component{
    state = {
        totalInCart:"0"
    };
    
    render(){
        return(
            <div className="containerh">
                <div className="item1">
                    <FontAwesomeIcon icon={faBars}  size="3x" />
                </div>
                <div className="item2">
                    <FontAwesomeIcon icon={faUser}  size="3x"/>
                </div>
                <div className="item3">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="item44">
                    <FontAwesomeIcon icon={faShoppingCart}  size="3x"/>
                    <div className="total">{this.state.totalInCart}</div>
                </div>
            </div>
        )
    }
}
export default Header;