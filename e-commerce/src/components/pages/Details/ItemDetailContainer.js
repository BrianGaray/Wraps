import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";
import { dataBase } from "../../../firebase/firebaseConfig";

function ItemDetailContainer() {

  // Estado para almacenar los datos del producto seleccionado
  const [items, setItems] = useState({});

  // Obtener el id del producto de los parámetros de la URL
  const { id } = useParams();

  useEffect(() => {

    // Obtener la colección de productos de la base de datos
    const itemCollection = collection(dataBase, "Products");

    // Obtener la referencia del producto seleccionado
    const ref = doc(itemCollection, id);

    // Obtener los datos del producto y almacenarlos en el estado
    getDoc(ref).then((res) => {
      setItems({
        id: res.id,
        ...res.data(),
      });
    });

  }, [id]);

  // Renderizar el detalle del producto
  return (
    <>
      <ItemDetail items={items} key={items.id} />
    </>
  );
}

export default ItemDetailContainer;
