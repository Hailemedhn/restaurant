import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import Middle from "./Middle";
import Footer from "./Footer";
import Side from "./Side.js";
import Choice from "./Choice";
import Deliver from "./Deliver";
import Cart from "./Cart";

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
  const [toggle, setToggle] = useState(true);
  const [page, setPage] = useState("home");
  const placeOrder = (event) => {
    event.preventDefault();
    setToggle(false);
    setPage("order");
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
        <Cart />
      </div>}
    </div>
  );
}

export default App;
