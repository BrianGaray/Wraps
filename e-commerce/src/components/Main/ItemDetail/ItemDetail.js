import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import ItemCount from "./Count/ItemCount";

const ItemDetail = ({ items }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, getProductQuantity } = useContext(CartContext);

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
    addToCart(items, quantityToAdd);
  };
  const ProductQuantity = getProductQuantity(items.id);

  return (
    <section className="ItemDetail">
      {/* <h1 className="text-2xl text-red-500">{items.title}</h1>
      <div className="desc">
        <img className="w-24" loading="lazy" src={items.img} alt=""></img>
        <div className="info">
          <p>{items.description}</p>
          <h5>{items.price}$</h5>

          {quantity === 0 ? (
            <ItemCount
              initial={ProductQuantity}
              stock={items.stock}
              onAdd={onAdd}
            />
          ) : (
            <button>
              <Link to="/cart">ir al carrito</Link>
            </button>
          )}
        </div>
      </div> */}
      {/* 
      <div className="m-6 p-6 flex flex-col items-center justify-center gap-4 bg-base-100 shadow-xl">
        <figure className="w-auto">
          <img className="rounded-lg" src={items.img} alt="Album" />
        </figure>
        <div className="">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
        <div className="stats overflow-visible bg-neutral text-primary-content">
          <div className="stat m-auto">
            {quantity === 0 ? (
              <ItemCount
                initial={ProductQuantity}
                stock={items.stock}
                onAdd={onAdd}
              />
            ) : (
              <button className="btn btn-primary">
                ver carrito
                <Link to="/cart"></Link>
              </button>
            )}
          </div>

          <div className="stat m-auto">
            {/* <div className="stat-title">Añadir cantidad</div> 
            <div className="stat-value text-lg m-auto">$400</div>
            <div className="stat-actions">
              <button className="btn btn-primary">Pedir ahora</button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="card w-full m-auto items-center justify-center bg-base-100 shadow-xl">
        <figure className="rounded-none">
          <img src={items.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
          <div className="card-actions justify-end">
            <div className="stats overflow-visible bg-base-200 text-primary-content">
              <div className="stat m-auto">
                {quantity === 0 ? (
                  <ItemCount
                    initial={ProductQuantity}
                    stock={items.stock}
                    onAdd={onAdd}
                  />
                ) : (
                  <button className="btn btn-primary">
                    ver carrito
                    <Link to="/cart"></Link>
                  </button>
                )}
              </div>

              <div className="stat m-auto">
                <div className="stat-value text-lg m-auto">$400</div>
                <div className="stat-actions">
                  <button className="btn btn-primary">Pedir ahora</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
