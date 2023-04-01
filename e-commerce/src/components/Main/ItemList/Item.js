import React from "react";
import { Link } from "react-router-dom";


const Item = ({ items }) => {
  
  return (
    // <div class="grid grid-cols-1 gap-y-10 gap-x-6 mt-6 m-6">
    //   <div class="collections relative">
    //     <div class="img aspect-w-1 aspect-h-1 w-full overflow-hidden group-hover:opacity-75 lg:aspect-none">
    //       <img className="m-auto" src={items.img} alt="Azuki" />
    //     </div>
    //     <div class="mt-4">
    //       <h3 class="text-center text-base font-semibold">
    //         <a href="#" class="block">
    //           <span aria-hidden="true" class="absolute inset-0"></span>
    //         </a>
    //       </h3>
    //     </div>
    //   </div>
    <section>
      <div className="m-4">
        <div className="card w-80 m-auto bg-base-100 shadow-xl">
          <figure>
            <img src={items.img} alt="Shoes" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">
             
              <div className="badge badge-primary">30% OFF</div>
            </h2>

            <div className="card-actions justify-end">
              <div className="badge badge-outline">400$</div>
              <div className="badge badge-outline">350$</div>
            </div>
          </div>
          <Link className="block text" to={`/item/${items.id}`}>
            <span aria-hidden="true" class="absolute inset-0"></span>
          </Link>
        </div>
      </div>
      <div className="m-4">
        <div className="card w-80 m-auto bg-base-100 shadow-xl">
          <figure>
            <img src={items.img} alt="Shoes" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">
             
              <div className="badge badge-primary">30% OFF</div>
            </h2>

            <div className="card-actions justify-end">
              <div className="badge badge-outline">400$</div>
              <div className="badge badge-outline">350$</div>
            </div>
          </div>
          <Link className="block text" to={`/item/${items.id}`}>
            <span aria-hidden="true" class="absolute inset-0"></span>
          </Link>
        </div>
      </div>
 
    </section>
  );
};

export default Item;
