import React from "react";
import { Route, Routes } from "react-router-dom";

import ItemListContainer from "../pages/home/ItemListContainer";
import ItemDetailContainer from "../pages/Details/ItemDetailContainer";
import Cart from "../pages/cart/Cart";
import Checkout from "../common/checkout";

function Main() {
  return (
    <main className="main-content">
      {/* Se definen las rutas para los diferentes componentes */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </main>
  );
}

export default Main;
