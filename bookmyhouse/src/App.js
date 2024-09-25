import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home/Home';
import { Rent } from './Pages/Rent/Rent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from './Pages/ShopingCart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/rent" element={<Rent/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      
    </div>
  );
}

export default App;
