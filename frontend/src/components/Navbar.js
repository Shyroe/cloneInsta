import React from "react";

import { StyledNavbar } from "../styles/styled";
import logo from "../images/instagram-title.png";

import { useHistory, withRouter, Link } from "react-router-dom";

import {
  FiSearch,
  FiHeart,
  FiMessageCircle,
  FiBookmark,
  FiUpload,
} from "react-icons/fi";
import { AiFillHome, AiOutlineCamera } from "react-icons/ai";
import { TiCompass } from "react-icons/ti";
import { FaUserCircle, FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  let history = useHistory();

  const changeRoute = () => {
    console.log("Rota mudada!");
    return history.push("/new");
  };
  return (
    <StyledNavbar>
      <ul>
        <img src={logo} alt="" />
        <div>
          <span>
            <FiSearch />
          </span>
          <span>Pesquisar</span>
        </div>
        <div>
          {/* <AiFillHome /> */}
          <Link to="/list">
            <AiFillHome />
          </Link>
          <TiCompass />
          <Link to="/new">
            <FiUpload />
          </Link>
          {/* <FiUpload onClick={changeRoute} /> */}
          <Link to="/user">
            <FaUserCircle />
          </Link>
        </div>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
