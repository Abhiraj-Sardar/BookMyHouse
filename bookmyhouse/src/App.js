import './App.css';
import { Home } from './Pages/Home/Home';
import { Rent } from './Pages/Rent/Rent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from './Pages/ShopingCart/Cart';
import { CartProvider } from './CartContext';
function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/rent" element={<Rent/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
      </CartProvider>
           
    </div>
  );
}

export default App;
