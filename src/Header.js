import React, {Component} from "react";
import "./Header.css";
import manny from "./images/manny.png.png";
import logo from "./images/logo.jpg";
import cart from "./images/cart.png";

class Header extends Component{

    render(){
        return(
            <div className="containerh">
                <div className="item1">
                    <div className="humberger">
                        <p className="p1"></p>
                        <p className="p2"></p>
                        <p className="p3"></p>
                    </div>
                </div>
                <div className="item2">
                    <img className="manny" src={manny} alt="manny" />
                </div>
                <div className="item3">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="item4">
                    <img className="cart" src={cart} alt="cart" />
                </div>
            </div>
        )
    }
}
export default Header;