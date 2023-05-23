import React, { useState } from "react";
import Chevron from "./Chevron";

const Item = ({ children, size, content }) => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div className={`collapse collapse--${size}`}>
      <button className="collapse__btn" onClick={toggleCollapse}>
        {content.value}
        {open ? <Chevron rotate={"rotate(-180)"} /> : <Chevron />}
      </button>
      {open && <div className="collapse__content">{children}</div>}
    </div>
  );
};

const Collapse = ({ size = "full", content }) => {
  return (
    <section className={`collapses collapses--${size}`}>
      {content.map((c, index) => (
        <Item key={index} size={size} content={c}>
          {Array.isArray(c.description) ? (
            <ul>
              {c.description.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          ) : (
            <span>{c.description}</span>
          )}
        </Item>
      ))}
    </section>
  );
};

export default Collapse;
