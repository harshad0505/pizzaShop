import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navigation from './Component/Navigation';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Singleproduct from './Pages/SingleProduct';
import { CartContext } from './Pages/CartContext';
import { useState  , useEffect} from 'react';


function App() {
const [cart, setCart] = useState({});
useEffect(()=>{
  const cart =window.localStorage.getItem('cart');
  setCart(JSON.parse(cart));
  console.log(cart);
},[]);

useEffect(() => {
  window.localStorage.setItem('cart', JSON.stringify(cart));
  
}, [cart]);

  return (
    <div className="App">
      <BrowserRouter>
      <CartContext.Provider value={{cart , setCart}} >

      
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Products/:_id" element={<Singleproduct/>}></Route>
      </Routes>
      </CartContext.Provider>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
