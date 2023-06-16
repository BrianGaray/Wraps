import React from "react";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
//import Theme from "../../common/Theme";
import Footer from "../../layout/footer";

const Drawer = () => {
  return (
    <div className="drawer" role="navigation">
      {/* Checkbox para abrir y cerrar el drawer */}
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Contenido del drawer */}
      <div className="drawer-content flex flex-col">
        {/* Cabecera del drawer */}
        <Header/>

        {/* Contenido principal de la página */}
        <Main />

        {/* Pie de página */}
        <Footer />
      </div>

      {/* Menú lateral del drawer */}
      <div className="drawer-side">
        {/* Overlay para cerrar el drawer */}
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

        {/* Lista de opciones del menú lateral */}
        <ul className="menu p-4 w-80 bg-white">
          {/* Selector de tema */}
     

          {/* Opción 1 del menú lateral */}
          <button className="btn">modo oscuro</button>

          {/* Opción 2 del menú lateral */}
      
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
