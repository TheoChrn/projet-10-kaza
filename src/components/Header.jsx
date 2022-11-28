import React from "react";
import { NavLink } from "react-router-dom";
import KazaLogo from "../assets/Logo/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <figure>
        <img src={KazaLogo} alt="logo" />
      </figure>
      <nav>
        <ul>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav nav-active" : "nav")}
          >
            <li>ACCUEIL</li>
          </NavLink>
          <NavLink
            to={"/a-propos"}
            className={(nav) => (nav.isActive ? "nav nav-active" : "nav")}
          >
            <li>À PROPOS</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
