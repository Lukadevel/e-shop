import { Link } from "react-router-dom";
import InputComponent from "./InputComponent";
import logo from "../assets/logo.png";

//icons

import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

function NavbarComponent() {
  return (
    <div className=" bg-mainBlue h-[100px] ">
      <div className="container w-[90%] h-[100px] mx-auto flex justify-between items-center ">
        <Link to="/">
          <img src={logo} alt="e-shop" />
        </Link>

        <InputComponent />

        <div className="flex">
          <div>
            <FaUser className="text-[#fff]" />
            <span className="text-[#fff]">Sing in</span>
          </div>
          <div>
            <FaHeart className="text-[#fff]" />
            <span className="bg-mainYellow">0</span>
          </div>
          <div>
            <FaShoppingCart className="text-[#fff]" />
            <span className="bg-mainYellow">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
