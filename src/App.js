import './App.css';
import Header from "./Header";
import Middle from "./Middle";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="middle">
        <Middle />
      </div>
      <div className='footer'>
        <Footer />
      </div>
   
    </div>
  );
}

export default App;
