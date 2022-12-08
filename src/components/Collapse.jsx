import React, { useState } from "react";
import Chevron from "./Chevron";

const Collapse = ({ value, description, list, size = "full" }) => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div className={`collapse collapse--${size}`}>
      <button className="collapse__btn" onClick={toggleCollapse}>
        {value}
        {open ? <Chevron rotate={"rotate(-180)"} /> : <Chevron />}
      </button>
      {open && (
        <div className="collapse__content">
          {value === "Équipements" ? (
            <ul>
              {list.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          ) : (
            <span>{description}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
