import React, { useEffect, useState } from "react";
import Chevron from "./Chevron";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [picture, setPicture] = useState(pictures[currentIndex]);

  const previousPicture = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextPicture = () => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    setPicture(pictures[currentIndex]);
  }, [previousPicture, nextPicture]);

  return (
    <div className="slideshowContainer">
      {pictures.length > 1 ? (
        <button className="prev" onClick={previousPicture}>
          <Chevron rotate="rotate(90)" />
        </button>
      ) : (
        ""
      )}
      {pictures.length > 1 ? (
        <button className="next" onClick={nextPicture}>
          <Chevron rotate="rotate(-90)" />
        </button>
      ) : (
        ""
      )}

      <figure className="mediaContainer" key={`figure${currentIndex}`}>
        <img key={currentIndex} src={picture} alt={""} />
        {pictures.length > 1 ? (
          <figcaption key={`caption${currentIndex}`}>{`${currentIndex + 1}/${
            pictures.length
          }`}</figcaption>
        ) : (
          ""
        )}
      </figure>
    </div>
  );
};

export default Carousel;
