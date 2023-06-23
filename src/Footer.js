import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component{
    
    render(){
        return(
            <div className="containerf">
                <form className="item5">
                    <input type ="text" className="postalCode" placeholder="Code postal" />
                    <span className="inconnu">Code postal inconnu ?</span>
                    <div className="buttonContainer">
                        <button className="livrer">Livrer</button>
                        <button className="amporter">Amporter</button>
                    </div>
                    
                    <div className="commanderContainer">
                        <button className="commander">Commander</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Footer;