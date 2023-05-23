import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ accommodation}) => {
  return (
    <NavLink to={`/accomodation/_id=`}>
      <article className="card">
        <figure>
          <img
            src={accommodation.cover}
            alt={"Image" + " " + accommodation.title}
          />
          <h2>{accommodation.title}</h2>
        </figure>
      </article>
    </NavLink>
  );
};

export default Cards;
