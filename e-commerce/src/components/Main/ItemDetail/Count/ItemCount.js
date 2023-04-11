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
    <section className="count flex flex-col justify-center gap-4">
      <div className="layout flex items-center justify-between">
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
        <div className="badge badge-primary p-4 text-lg">$400</div>
      </div>
      <button className="btn btn-primary" onClick={AddToCart}>
        Agregar al carrito
      </button>
    </section>
  );
};

export default ItemCount;
