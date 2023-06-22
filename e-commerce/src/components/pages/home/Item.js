import React from "react";
import { Link } from "react-router-dom";
import { useLastSelectedItem } from "../../../context/LastSelectedItemContext";

const Item = ({ items }) => {
  const { updateLastSelectedItem } = useLastSelectedItem();

  function handleClick() {
    updateLastSelectedItem(items);
  }

  return (
    <div>
      
      {/* Carousel (aqui deberia ir el codigo del carousel) */}

      {/* Sección que contiene la tarjeta del ítem */}
      <section className="promos">
    
        <div className="card bg-base-100 flex items-center flex-col gap-px shadow-xl w-full p-3 text-lg">
     
          <figure>
            {/* Imagen del ítem */}
            <img
              className="p-2 rounded-3xl"
              src={items.img}
            />
            {/* Descuento en el ítem */}
            {/* <div className="badge badge-primary absolute top-2 left-2">
              30% OFF
            </div> */}
          </figure>
          {/*<div className="p-2">
            <h2 className="card-title"></h2>
            {/* Icono del ítem 
            <svg
              className="w-5 absolute"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="card-actions gap-1 justify-end">
              {/* Precio original del ítem 
              <div className="badge badge-error">400$</div>
              {/* Precio con descuento del ítem 
              <div className="badge badge-primary">350$</div>
            </div>
          </div>*/}
          <div>
            <p>{items.title}</p>
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          {/* Enlace a la página del ítem */}

          <Link
            className="block text"
            to={`/item/${items.id}`}
            onClick={handleClick}
          >
            <span aria-hidden="true" class="absolute inset-0"></span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Item;
