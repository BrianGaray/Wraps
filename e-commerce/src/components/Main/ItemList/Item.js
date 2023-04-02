import React from "react";
import { Link } from "react-router-dom";


const Item = ({ items }) => {
  
  return (
    <div>
    {/* //carousel */}
    {/* <div className="h-80 m-2 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <img src={items.img} />
  </div> 
  <div className="carousel-item h-full">
    <img src={items.img} />
  </div> 
</div>
  */}

    {/* //cards  */}
  
      <div className="m-2 my-20">
        <div className="card w-46 m-auto bg-base-100 shadow-xl">
          <figure>
            <img className="p-2 rounded-3xl" src={items.img} alt="Shoes" />
          </figure>
          <div className="card-body p-2">
            <h2 className="card-title">
             
              <div className="badge badge-primary">30% OFF</div>
            </h2>

            <div className="card-actions justify-end">
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
