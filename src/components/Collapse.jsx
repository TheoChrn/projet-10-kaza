import React, { useState } from "react";

const Collapse = ({ value, description }) => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <button className="collapse__btn" onClick={toggleCollapse}>
        {value}
        {open ? (
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        ) : (
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        )}
      </button>
      {open && (
        <div className="collapse__content">
          <span>{description}</span>
        </div>
      )}
    </div>
  );
};

export default Collapse;
