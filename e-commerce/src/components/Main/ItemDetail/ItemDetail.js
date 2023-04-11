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
    <section className="ItemDetail p-6">
      <div className="detail shadow rounded-box p-4 flex flex-col gap-4">
        <figure>
          <img className="rounded-box" src={items.img} alt="Shoes" />
        </figure>
       
        <h2 className="">
          Wraps!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>

        <div className="">
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
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
