
import './App.css';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages';
import Product from "./pages/productpage";
import GoToTop from './Components/ScrolltoTop';


function App() {

  return (
    <Router>
      <GoToTop />
  <Routes>
    <Route path="/" element={<Home/>} exact/> 
     <Route path="/mint" element={<Product/>} exact/>  
  </Routes>
    </Router>
  );
}

export default App;

