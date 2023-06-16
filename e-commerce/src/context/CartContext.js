import { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (items, quantity) => {
    if (isInCart(items.id)) {
      totalQuantitySingleProduct(items, quantity);
    } else {
      setCart([...cart, { ...items, quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalQuantitySingleProduct = (items, quantity) => {
    const updateCart = cart.map((prod) =>
      prod.id === items.id
        ? { ...prod, quantity: prod.quantity + quantity }
        : prod
    );
    setCart(updateCart);
  };

  const removeItem = (id) => {
    const CartFilter = cart.filter((prod) => prod.id !== id);
    setCart(CartFilter);
    console.log(`Remove product ${id}`);
  };

  const clearAll = () => {
    setCart([]);
  };

  const totalQuantity = () => {
    let count = 0;
    cart.forEach((prod) => {
      count += prod.quantity;
    });
    return count;
  };

  const totalPrice = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.price * prod.quantity;
    });
    return total;
  };

  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearAll,
        totalQuantity,
        totalPrice,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};




export default CartProvider;
