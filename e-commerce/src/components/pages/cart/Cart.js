import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";

// Componente que muestra el contenido del carrito
const Cart = () => {
  const { cart, clearAll, removeItem, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  // Si el carrito está vacío, muestra un mensaje y un botón para volver al home
  if (cart.length === 0) {
    return (
      <>
        <div className="flex flex-col items-center justify-center p-32 gap-6">
        <p className="text-3xl font-serif">próximamente</p>
          <img
            src="https://media-public.canva.com/MADpjvFWvUA/1/screen.svg"
            alt="Yellow-E-commerce-Shop-Bag-Store-Logo-removebg-preview"
            border="0"
          ></img>
          
          <button className="btn">
            <Link to="/">volver al inicio</Link>
          </button>
        </div>
      </>
    );
  }

  // Si el carrito tiene productos, los muestra usando el componente CartDetail
  return (
    <section className="cart mx-4 my-24">
      {cart.map((prod) => (
        <CartDetail
          key={prod.id}
          prod={prod}
          removeItem={removeItem}
          total={total}
        />
      ))}

      <div className="flex items-center justify-center m-6">
        <button className="btn btn-error" onClick={clearAll}>
          Vaciar carrito
        </button>
      </div>
    </section>
  );
};

export default Cart;
