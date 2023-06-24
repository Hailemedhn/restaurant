import React, {Component} from "react";
import "./Side.css";

class Side extends Component{
    render(){
        return(
            <div className="containers">
                <div className="hidden" id="side">
                    <span className="span1">Home</span>
                    <span className="span2">About</span>
                    <span className="span3">Menu</span>
                    <span className="span4">Contact</span>
                
                </div>
            </div>
        )
    }
}
export default Side;