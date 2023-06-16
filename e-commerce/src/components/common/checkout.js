import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Form from "./form";
//import "../../css/checkout.css";

const Checkout = () => {
  const { cart, clearAll, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  const [idBuy, setIdBuy] = useState("");
  const handleId = (id) => {
    setIdBuy(id);
  };

  if (idBuy) {
    return (
      <div className="purchase-code">
        <h2>Gracias por su compra!! tu codigo de STEAM es {idBuy}</h2>
      </div>
    );
  }

  return (
    <div className="purchase-order">
      <h1>Checkout</h1>
      <div>
        <Form
          cart={cart}
          total={total}
          clearAll={clearAll}
          handleId={handleId}
        />
      </div>
    </div>
  );
};

export default Checkout;
