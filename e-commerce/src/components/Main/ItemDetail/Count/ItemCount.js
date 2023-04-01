import React, { useState, useEffect } from "react";

const ItemCount = ({ stock, onAdd, initial = 1 }) => {
  const [Count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const Add = () => {
    if (Count < stock) {
      setCount(Count + 1);
    } else {
      alert("maximo stock");
    }
  };

  const Remove = () => {
    Count > 1 && setCount(Count - 1);
  };

  const AddToCart = () => {
    onAdd(Count);
  };

  return (
    <div className="AddToCart flex flex-col items-center justify-center gap-2">
      {/* <button onClick={Add}>+</button>
      <button>{Count}</button>
      <button onClick={Remove}>-</button>
      <button onClick={AddToCart}>Agregar al carrito</button> */}

      <div className="btn-group">
        <button className="btn bg-neutral" onClick={Add}>
          <span className="text-xl">+</span>
        </button>
        <button className="btn bg-neutral">
          <span className="text-base">{Count}</span>
        </button>
        <button className="btn bg-neutral" onClick={Remove}>
          <span className="text-xl">-</span>
        </button>
      </div>
      <button className="btn btn-primary" onClick={AddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
