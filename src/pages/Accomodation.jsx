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

  const loadAccommodation = async () => {
    const acc = await getById(id);
    if (!acc) {
      return navigate("/not-found");
    }
    setAccommodation(acc);
  };

  useEffect(() => {
    loadAccommodation();
  }, []);

  return (
    <div className="container">
      <Header />
      {accommodation && (
        <main>
          <Carousel data={accommodation.pictures} />
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
                  index += 1;
                  return (
                    <li key={index}>
                      <Rating
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
            <section className="collapses">
              <Collapse
                value={"Description"}
                description={accommodation.description}
              />
              <Collapse value={"Équipements"} list={accommodation.equipments} />
            </section>
          </section>
        </main>
      )}
    </div>
  );
};

export default Accomodation;
