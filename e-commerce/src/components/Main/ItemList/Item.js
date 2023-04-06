import React from "react";
import { Link } from "react-router-dom";

const Item = ({ items }) => {
  return (
    <div>
      {/* //carousel */}

      {/* //cards  */}
      <div className="promos">
        <div className="card m-auto bg-base-100 shadow-xl w-full h-44">
          <figure>
            <img
              className="p-2 rounded-3xl"
              src="https://i.ibb.co/jZm7GYC/wraps-8-1-removebg-preview.png"
              alt="Shoes"
            />
            <div className="badge badge-primary absolute top-2 left-2">
              30% OFF
            </div>
          </figure>
          <div className="p-2">
            <h2 className="card-title"></h2>
            <svg
                className="w-5 absolute"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            <div className="card-actions gap-1 justify-end">
            

            <div className="badge badge-error">400$</div>
              <div className="badge badge-primary">350$</div>
            </div>
          </div>
          <Link className="block text" to={`/item/${items.id}`}>
            <span aria-hidden="true" class="absolute inset-0"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
