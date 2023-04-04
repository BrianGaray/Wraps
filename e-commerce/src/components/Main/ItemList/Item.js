import React from "react";
import { Link } from "react-router-dom";


const Item = ({ items }) => {
  
  return (
    <div>
    {/* //carousel */}
    

    {/* //cards  */}
    <div className="promos">
    
        <div className="card m-auto bg-base-100 shadow-xl">
        
          <figure>
            <img className="w-11/12 p-2 rounded-3xl" src={items.img} alt="Shoes" />
          </figure>
          <div className="p-2">
            <h2 className="card-title">
             
              {/* <div className="badge badge-primary">30% OFF</div> */}
            </h2>

            <div className="card-actions gap-1 justify-end">
              <div className="badge badge-ghost">400$</div>
              <div className="badge badge-ghost">350$</div>
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
