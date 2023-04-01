import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";
//import "../../../../css/cart.css";
import CartDetail from "./CartDetail";

const Cart = () => {
  const { cart, clearAll, removeItem, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  if (cart.length === 0) {
    return (
      <>
        <div>
          <h2>carrito vacio</h2>
          <button>
            <Link to="/">Home</Link>
          </button>
        </div>
      </>
    );
  }

  return (
    <section className="cart">
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
          clear all
        </button>
      </div>
    </section>
  );
};

export default Cart;
