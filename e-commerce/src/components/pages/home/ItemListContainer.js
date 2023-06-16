import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../../firebase/firebaseConfig";

function ItemListContainer() {
  // Estado que almacena la lista de productos
  const [items, setItems] = useState([]);
  // Obtiene el parámetro de categoría de la URL
  const { categoryId } = useParams();

  // Consulta la base de datos y actualiza el estado con los productos correspondientes
  useEffect(() => {
    // Referencia a la colección de productos en la base de datos
    const itemColection = collection(dataBase, "Products");
    // Consulta filtrada por categoría o sin filtrar si no se especifica una categoría
    const reference = categoryId
      ? query(itemColection, where("category", "==", categoryId))
      : itemColection;

    // Obtiene los productos de la base de datos y los almacena en el estado
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
    // Renderiza el componente ItemList con los productos obtenidos del estado
    <ItemList items={items} />
  );
}

export default ItemListContainer;
