import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Theme from "./Theme";
import Footer from "../Footer/footer";

const Drawer = () => {
  return (
    <div className="drawer bg-base-200">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <Header />
        
        {/* <!-- Page content here --> */}
        <Main />
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
         <Theme/>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
