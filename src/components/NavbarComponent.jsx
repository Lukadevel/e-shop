import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import InputComponent from "./InputComponent";

function NavbarComponent() {
  return (
    <div className=" bg-mainBlue h-[100px] ">
      <div className="container w-[90%] mx-auto">
        <Link to="/">
          <img src={logo} alt="e-shop" />
        </Link>
        <InputComponent />
      </div>
    </div>
  );
}

export default NavbarComponent;
