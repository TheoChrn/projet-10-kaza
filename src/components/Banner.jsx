import React from "react";

const Banner = ({ className, h1, img }) => {
  return (
    <figure className={className}>
      <img src={img} alt="background" />
      {h1 ? <h1>Chez vous, partout et ailleurs</h1> : ""}
    </figure>
  );
};

export default Banner;
