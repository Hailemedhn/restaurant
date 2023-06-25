import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import Middle from "./Middle";
import Footer from "./Footer";
import Side from "./Side.js";
import Choice from "./Choice";
import Deliver from "./Deliver";
import Cart from "./Cart";
import Item from "./Item";

import "./Side.css";


document.body.onclick=(e) => {
    const sideBar = document.getElementById("side");   
  if(e.target.id === "bars"){  
     sideBar.className = (sideBar.className === "hidden" || sideBar.className === "hidden2")  ? "sides" : "hidden2";
  }else if(sideBar.className === "sides"){
    sideBar.className = "hidden2"; 
  }
}
let footer = document.getElementById("footerContainer");

function App() {
 const [itemList, setItemLIst] = useState( [
        {name: "Margarita", description: "Tomato sauce, mozzerela, organic oregano", price:"CHF17.00"},
        {name:"Stromboli", description: "Tomato sauce, mozzerela, organic oregano",  price:"CHF18.00"}
        
      ],
 )
  const [dummyProp, setDummyProp] = useState(true);
  const [page, setPage] = useState("home");
  const [inCart, setInCart] = useState(0);
  const [currentPrice, setCurrentPrice] = useState("17")
  const placeOrder = (event) => {
    event.preventDefault();
    setPage("order");
  }
  const addToCart = (event)=>{
    setInCart((parseFloat(inCart) + parseFloat(event.currentTarget.id)).toFixed(2) + " CHF")
  }
  const selectSize = (event)=>{
    for(let i=0; i < document.getElementsByClassName("button").length; i++ ){
      if(event.target.id.charAt(0)=== document.getElementsByClassName("button")[i].id.charAt(0)){
        document.getElementsByClassName("button")[i].style.border = "1px solid gray";
    }
  }
    event.target.style.border  = "2px solid black";

    let tempArray = itemList;
    tempArray[parseInt(event.target.id)].price = "CHF" + event.target.id.substr(2,2) +".00"; 
    setItemLIst(tempArray);
    setCurrentPrice(itemList[parseInt(event.target.id)].price.substring(3,5))
    setDummyProp(!dummyProp)
  }
  
  return (
    <div  className={"App" + page}>
      <div className="header" >
        <Header showCart = {true} />
      </div>
      {page === "home"  && <div className="middle">
        <Middle/>
      </div>}
      {page === "home" && <div className='footer' id="footerContainer">
        <Footer orderFunction={placeOrder} />
      </div>}
      <div className='sideBarLand'>
        <Side />
      </div>
      {page === "order" &&  <div className='sideScroll'>
        <Choice />
      </div>}     
      {page === "order" &&  <div className='deliver'>
         <Deliver />
      </div>}     
      {page === "order" &&  <div className='cart'>
        <Cart inCartProp = {inCart}/>
      </div>}
      {page === "order" &&  <div className='item'>
        <Item item={itemList} selectSize={selectSize} putInCart={addToCart} currentPrice={currentPrice}/>
      </div>}
    </div>
  );
}

export default App;
