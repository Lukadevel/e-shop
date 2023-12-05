import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo 1.png";

function NavbarComponent() {
  return (
    <div className=" bg-mainBlue h-[100px]">
      <div className="container mx-auto">
        <Link to="/">
          <img src={logo} alt="e-shop" />
        </Link>
      </div>
    </div>
  );
}

export default NavbarComponent;
