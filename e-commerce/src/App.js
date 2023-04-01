//import "./css/App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Drawer from "./components/Drawer/Drawer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Drawer />
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
