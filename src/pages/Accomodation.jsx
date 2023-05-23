import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../API/Api";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Header from "../components/Header";
import Rating from "../components/Rating";

const Accomodation = () => {
  const [accommodation, setAccommodation] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [starSize, setStarSize] = useState(
    window.innerWidth >= 1024 ? "30px" : "16xp"
  );

  const loadAccommodation = async () => {
    const acc = await getById(id);
    if (!acc) {
      return navigate("/not-found");
    }
    setAccommodation(acc);
  };

  const reSize = () => {
    if (window.innerWidth >= 1024) {
      setStarSize("30px");
    } else {
      setStarSize("16px");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", reSize);
    return () => {
      window.removeEventListener("resize", reSize);
    };
  }, [starSize]);

  useEffect(() => {
    loadAccommodation();
  }, []);

  return (
    <div className="container">
      <Header />
      {accommodation && (
        <main>
          <Carousel pictures={accommodation.pictures} />
          <section className="accommodationInfo">
            <div className="accommodationContent">
              <div className="accommodationTitle">
                <h1>{accommodation.title}</h1>
                <h3>{accommodation.location}</h3>
              </div>
              <ul className="accommodationTags">
                {accommodation.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <ul className="accommodationRating">
                {[...Array(5)].map((_, index) => {
                  index++;
                  return (
                    <li key={index}>
                      <Rating
                        size={starSize}
                        color={
                          index <= accommodation.rating ? "#FF6060" : "#E3E3E3"
                        }
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="accommodationHost">
                <h2>{accommodation.host.name}</h2>
                <img
                  src={accommodation.host.picture}
                  alt={accommodation.host.name}
                />
              </div>
            </div>
            <Collapse
              size={"md"}
              content={[
                {
                  value: "Description",
                  description: accommodation.description,
                },
                {
                  value: "Équipements",
                  description: accommodation.equipments,
                },
              ]}
            />
          </section>
        </main>
      )}
    </div>
  );
};

export default Accomodation;
