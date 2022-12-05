import React, { useEffect, useState } from "react";
import Chevron from "./Chevron";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [item, setItem] = useState(data[currentIndex]);

  const prev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    setItem(data[currentIndex]);
  }, [prev, next]);

  return (
    <div className="slideshowContainer">
      <button className="prev" onClick={prev}>
        <Chevron rotate="rotate(90)" />
      </button>
      <button className="next" onClick={next}>
        <Chevron rotate="rotate(-90)" />
      </button>
      <figure className="mediaContainer" key={`figure${currentIndex}`}>
        <img key={currentIndex} src={item} alt={""} />
        <figcaption key={`caption${currentIndex}`}>{`${currentIndex + 1}/${
          data.length
        }`}</figcaption>
      </figure>
    </div>
  );
};

export default Carousel;
