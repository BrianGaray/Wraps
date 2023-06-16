import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

// Componente que muestra el número total de productos en el carrito
function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="cartNumber">
      {/* Muestra el número total de productos en el carrito si es mayor que 0 */}
      <span>{totalQuantity() === 0 ? "" : totalQuantity()}</span>
    </div>
  );
}

export default CartWidget;
