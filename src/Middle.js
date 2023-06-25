import React, {Component} from "react";
import "./Middle.css";
import pizza from "./images/pizza.jpg";

class Middle extends Component{
    render(){
        return(
            <div className="containerm">
                <div className="item4">
                    <img className="pizza" src={pizza} alt="pizza" />
                </div>
            </div>
        )
    }
}
export default Middle;