import React, { Component, createRef } from "react";
import "./Item.css";
import margarita from "./images/margarita.jpg";
import stromboni from "./images/stromboni.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

class Item extends Component {

    render(){
        return(
            <div className="itemList">
                <div className= "itemContainer">
                    <img className="pizzaPic" src={margarita} alt="" />
                    <p className="name">{this.props.item[0].name}</p>
                    <p className="descriptioin">{this.props.item[0].description}</p>
                    <div className="buttonsContainer">
                        <button className="button" onClick={this.props.selectSize} id="0H15" >
                            small
                        </button>
                        <button className="button" onClick={this.props.selectSize} id="0H17" >
                            regular
                        </button>
                        <button className="button" onClick={this.props.selectSize} id="0H19" >
                            large
                        </button>

                    </div>
                    <div className="textCenter"  onClick={this.props.putInCart} id={this.props.currentPrice}>
                        <p className="price">{this.props.item[0].price} 
                        <FontAwesomeIcon icon={faCartShopping} /></p>
                    </div>
                </div>
                <div className= "itemContainer">
                    <img className="pizzaPic" src={stromboni} alt="" />
                    <p className="name">{this.props.item[1].name}</p>
                    <p className="descriptioin">{this.props.item[1].description}</p>
                    <div className="buttonsContainer">
                        <button className="button" onClick={this.props.selectSize} id="1H16" >
                            small
                        </button>
                        <button className="button" onClick={this.props.selectSize} id="1H18" >
                            regular
                        </button>
                        <button className="button" onClick={this.props.selectSize} id="1H20">
                            large
                        </button>

                    </div>
                    <div className="textCenter"  onClick={this.props.putInCart} id={this.props.currentPrice}>
                        <p className="price">{this.props.item[1].price} <FontAwesomeIcon icon={faCartShopping} /></p>
                    </div>
                </div>
                <div className="dummy"></div>
            </div>
        )
    }
}
export default Item;