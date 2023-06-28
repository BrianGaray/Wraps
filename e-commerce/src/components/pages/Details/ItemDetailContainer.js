import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";
import { dataBase } from "../../../firebase/firebaseConfig";
import Loader from "../../pages/home/loader";

function ItemDetailContainer() {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemCollection = collection(dataBase, "Products");
    const ref = doc(itemCollection, id);

    getDoc(ref)
      .then((res) => {
        setItems({
          id: res.id,
          ...res.data(),
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ItemDetail items={items} key={items.id} />
      )}
    </>
  );
}

export default ItemDetailContainer;

