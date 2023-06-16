import React, { useState, useEffect } from "react";

const ItemCount = ({ stock, onAdd, initial = 1 }) => {
  // Estado para guardar la cantidad actual del contador
  const [count, setCount] = useState(initial);

  // Actualiza el contador con el valor inicial cuando este cambia
  useEffect(() => {
    setCount(initial);
  }, [initial]);

  // Función para aumentar el contador
  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("No hay suficiente stock disponible");
    }
  };

  // Función para disminuir el contador
  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Función para agregar el producto al carrito con la cantidad actual
  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <section className="count flex flex-col justify-center gap-4">
      <div className="layout flex items-center justify-between">
        <div className="btn-group">
          <button className="btn bg-neutral" onClick={handleAdd}>
            <span className="text-xl">+</span>
          </button>
          <button className="btn bg-neutral">
            <span className="text-base">{count}</span>
          </button>
          <button className="btn bg-neutral" onClick={handleRemove}>
            <span className="text-xl">-</span>
          </button>
        </div>
        <div className="badge badge-primary p-4 text-lg">$400</div>
      </div>
      <button className="btn btn-primary" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </section>
  );
};

export default ItemCount;
