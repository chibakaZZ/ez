import React from "react";
import "./Navbar.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillCartPlusFill, BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="Logo">
          {" "}
          <p> PETSHOP.MN</p>
        </div>

        <div className="haih">
          {" "}
          <input
            className="Search"
            type="text"
            value={"Бүтээгдэхүүн хайх..."}
          />
          <div className="magnifier">
            <BsSearch className="ss" />
          </div>
        </div>

        <div className="Icons">
          <div>
            {" "}
            <AiOutlineHeart className="Heart" />
          </div>
          <div className="line"></div>
          <div>
            <BsFillCartPlusFill className="Cart" />
          </div>
          <div className="line"></div>
          <div>
            <FaUserCircle className="User" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
