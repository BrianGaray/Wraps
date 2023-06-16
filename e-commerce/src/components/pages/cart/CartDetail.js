import React from "react";
import { Link } from "react-router-dom";

// Componente que muestra los detalles de un producto en el carrito
const CartDetail = ({ prod, removeItem, total }) => {
  return (
    // Contenedor principal de la sección de detalles del carrito
    <article className="products-cart shadow my-4 rounded-box bg-base-100">
      {/* Encabezado de la sección */}
      <header className="mt-2 p-2">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            <li className="flex py-6">
              {/* Imagen del producto */}
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-box">
                <img
                  className="h-full w-full object-cover object-center"
                  src={prod.img}
                  alt={`Imagen del producto ${prod.title}`}
                />
              </div>

              {/* Detalles del producto */}
              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    {/* Título del producto */}
                    <h3>
                      <p className="mt-1 text-sm text-gray-500">{prod.title}</p>
                    </h3>
                    {/* Precio del producto */}
                    <p className="ml-4">${prod.price}400</p>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  {/* Cantidad del producto */}
                  <p className="text-gray-500">cantidad: {prod.quantity}</p>

                  {/* Botón para remover el producto del carrito */}
                  <div className="flex">
                    <button
                      className="btn-primary p-1 rounded-md"
                      onClick={() => removeItem(prod.id)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </article>
  );
};

export default CartDetail;
