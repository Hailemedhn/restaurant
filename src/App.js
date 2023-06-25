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
        {name:"Stromboli", description: "Tomato sauce, mozzerela, organic oregano",  price:"CHF19.00"}
        
      ],
 )
  const [toggle, setToggle] = useState(true);
  const [page, setPage] = useState("home");
  const [inCart, setInCart] = useState(0);
  const placeOrder = (event) => {
    event.preventDefault();
    setToggle(false);
    setPage("order");
  }
  const addToCart = (event)=>{
    console.log(event.currentTarget.id);
    setInCart((parseFloat(inCart) + parseFloat(event.currentTarget.id)).toFixed(2) + " CHF")
  }
  
  return (
    <div  className={"App" + page}>
      <div className="header" >
        <Header showCart = {toggle} />
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
        <Item item={itemList} putInCart={addToCart}/>
      </div>}
    </div>
  );
}

export default App;
