import React from "react";
import { Link } from "react-router-dom";

const CartDetail = ({ prod, removeItem, total }) => {
  return (
    <div className="products-cart shadow m-5 rounded-box bg-base-100">
     
      <div class="mt-2 p-2">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    <li class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-box">
                        <img className="h-full w-full object-cover object-center" src={prod.img} alt=""></img>
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                            <p class="mt-1 text-sm text-gray-500">{prod.title}</p>
                            </h3>
                            <p class="ml-4">${prod.price}400</p>
                          </div>
                          
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">cantidad: {prod.quantity}</p>

                          <div class="flex">
                            <button className="btn-primary p-1 rounded-md" onClick={() => removeItem(prod.id)}> Remove </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
      
  );
};

export default CartDetail;
