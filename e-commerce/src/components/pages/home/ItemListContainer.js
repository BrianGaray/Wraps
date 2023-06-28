import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../../firebase/firebaseConfig";
import ItemList from "./ItemList";
import Loader from "./loader";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemCollection = collection(dataBase, "Products");
    const reference = categoryId
      ? query(itemCollection, where("category", "==", categoryId))
      : itemCollection;

    getDocs(reference)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
}

export default ItemListContainer;
