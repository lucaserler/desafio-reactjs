import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/logo-navbar.png";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img className="imgH" src={img} alt="..."></img>
      <Link className="btnLink" to="/home">Home</Link>
      <Link className="btnLink" to="/cadastro">Cadastro</Link>
    </div>
  );
}
export default Header;
