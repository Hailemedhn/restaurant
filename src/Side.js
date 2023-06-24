import React, {Component} from "react";
import "./Side.css";

class Side extends Component{
    render(){
        return(
            <div className="containers">
                <div className="sides">
                    <span>Home</span>
                    <span>About</span>
                    <span>Menu</span>
                    <span>Contact</span>
                
                </div>
            </div>
        )
    }
}
export default Side;