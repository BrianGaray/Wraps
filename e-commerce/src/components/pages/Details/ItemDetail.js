import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import ItemCount from "../home/ItemCount";

const ItemDetail = ({ items }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, getProductQuantity } = useContext(CartContext);

  // Función que se ejecuta cuando se agrega un producto al carrito
  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
    addToCart(items, quantityToAdd);
  };

  // Obtiene la cantidad de productos que ya se agregaron al carrito para este ítem
  const ProductQuantity = getProductQuantity(items.id);

  return (
    <section className="ItemDetail font-serif mx-4 my-24">
      <div className="detail flex flex-col items-center justify-center gap-3 py-6 px-16">
        <div className="mb-10 text-3xl">
          <p>{items.title}</p>
        </div>
        <figure>
          <img className="rounded-box" src={items.img} alt="Productos" />
        </figure>
    
        <div className="rating mb-8">
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
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
        </div>
        <div className="font-sans">
          <p>
           {items.description}
          </p>
        </div>
        <div className="mr-auto flex flex-col justify-start font-sans">
          <div className="text-2xl">precio:</div>
          <div className="text-2xl">
          ${items.price}
          </div>
        </div>
        {/* <div className="p-6 flex flex-col gap-4">
          <h2 className="">
            Wraps!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

           Renderiza el componente ItemCount si no se ha agregado el producto al carrito, 
          de lo contrario muestra un botón que redirige al carrito 
          {quantity === 0 ? (
            <ItemCount
              initial={ProductQuantity}
              stock={items.stock}
              onAdd={onAdd}
            />
          ) : (
            <button className="btn btn-primary m-auto">
              ver carrito
              <Link to="/cart"></Link>
            </button>
          )}
        </div>*/}
      </div>
    </section>
  );
};

export default ItemDetail;
