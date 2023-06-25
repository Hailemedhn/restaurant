import React, { Component } from "react";
import "./Deliver.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

class Deliver extends Component{
    state = {
        location:"Servette"
    }
    render(){
        return(
            <div className="deliverContainer">
                <p>Courier: Geneve {this.state.location}</p>
                <p><FontAwesomeIcon icon={faCar} /> Deliver </p>
                <p>Minimum Quantity Surcharge: CHF20.00</p>
            </div>
        )
    }
}
export default Deliver;