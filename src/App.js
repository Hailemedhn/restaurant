import React from 'react';
import './App.css';
import Header from "./Header";
import Middle from "./Middle";
import Footer from "./Footer";
import Side from "./Side.js";
import "./Side.css";


document.body.onclick=(e) => {
    const sideBar = document.getElementById("side");   
  if(e.target.id === "bars"){  
     sideBar.className = (sideBar.className === "hidden" || sideBar.className === "hidden2")  ? "sides" : "hidden2";
  }else if(sideBar.className === "sides"){
    sideBar.className = "hidden2"; 
  }
}

function App() {
  const showSide = (event) => {
    // 
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
      <div className='sideBarLand'>
        <Side />
      </div>
   
    </div>
  );
}

export default App;
