import { BrowserRouter } from "react-router-dom";
import CartProvider from "../context/CartContext";
import Drawer from "../components/pages/home/Drawer";
import LastSelectedItemProvider from "../context/LastSelectedItemContext";

function App() {
  return (
    <CartProvider>
       <LastSelectedItemProvider>
      <BrowserRouter>
        <Drawer />
      </BrowserRouter>
      </LastSelectedItemProvider>
    </CartProvider>
  );
}

export default App;
