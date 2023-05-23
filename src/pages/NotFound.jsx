import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <div className="container">
      <Header />
      <div className="notFoundContainer">
        <div className="notFound">
          <h1>404</h1>
          <span>Oups! La page que vous demandez n'existe pas.</span>
        </div>
        <NavLink to={"/"}>
          <button>Retourner sur la page d’accueil</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
