import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import "../../../css/ItemList.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const itemColection = collection(dataBase, "Products");
    const reference = categoryId
      ? query(itemColection, where("category", "==", categoryId))
      : itemColection;

    getDocs(reference).then((res) => {
      const products = res.docs.map((prod) => {
        return {
          id: prod.id,
          ...prod.data(),
        };
      });
      setItems(products);
    });
  }, [categoryId]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
