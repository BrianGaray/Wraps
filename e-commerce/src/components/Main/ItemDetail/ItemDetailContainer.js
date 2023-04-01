import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//import "../../../css/ItemDetail.css";
import { collection, getDoc, doc } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";

function ItemDetailContainer() {
  const [items, setItems] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const itemColection = collection(dataBase, "Products");
    const ref = doc(itemColection, id);
    getDoc(ref).then((res) => {
      setItems({
        id: res.id,
        ...res.data(),
      });
    });
  }, [id]);

  return (
    <>
      <ItemDetail items={items} key={items.id} />
    </>
  );
}

export default ItemDetailContainer;
