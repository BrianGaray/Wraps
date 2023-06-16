import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { dataBase } from "../../firebase/firebaseConfig";

const Form = ({ cart, total, clearAll, handleId }) => {
  const [nombre, setName] = useState("");
  const [movil, setMovil] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [adress, setAdress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === emailRepeat) {
      const order = {
        buyer: {
          nombre: nombre,
          movil: movil,
          email: email,
          direccion: adress,
        },
        items: cart,
        total: total,
        date: serverTimestamp(),
      };

      const ordersCollection = collection(dataBase, "orders");
      addDoc(ordersCollection, order).then((res) => {
        handleId(res.id);
        clearAll();
      });
    } else {
      alert("Los emails deben coincidir");
    }
  };

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeMovil = (event) => {
    setMovil(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changeEmailRepeat = (event) => {
    setEmailRepeat(event.target.value);
  };
  const changeAdress = (event) => {
    setAdress(event.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Name"
            name="nombre"
            value={nombre}
            onChange={changeName}
            required
          />
        </div>
        <div>
          <label>Mobile: </label>
          <input
            type="text"
            placeholder="Mobile"
            name="movil"
            value={movil}
            onChange={changeMovil}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={changeEmail}
            required
          />
        </div>
        <div>
          <label htmlFor="">Confirm Email: </label>
          <input
            type="email"
            placeholder="Email"
            name="emailRepeat"
            value={emailRepeat}
            onChange={changeEmailRepeat}
            required
          />
        </div>
        <div>
          <label htmlFor="">Location: </label>
          <input
            type="text"
            placeholder="Location"
            name="direccion"
            value={adress}
            onChange={changeAdress}
            required
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
