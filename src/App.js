import React from 'react';
import './App.css';
import Header from "./Header";
import Middle from "./Middle";
import Footer from "./Footer";
import Side from "./Side.js";
import "./Side.css";


const sideBar = document.getElementById("side");
document.body.onclick=(e) => {
  if(e.target.id !== "bars"){
     sideBar.className = (sideBar.className === "side" )? "hidden" : "hidden"; }
  }

function App() {
  const showSide = () => {
    sideBar.className = (sideBar.className === "side" )? "hidden" : "side"; 
  }
  return (
    <div className="App">
      <div className="header" >
        <Header handleClick={showSide} />
      </div>
      <div className="middle">
        <Middle />
      </div>
      <div className='footer'>
        <Footer />
      </div>
      <div className='hidden' id='side'>
        <Side />
      </div>
   
    </div>
  );
}

export default App;
