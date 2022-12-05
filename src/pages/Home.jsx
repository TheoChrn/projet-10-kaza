import Header from "../components/Header";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import { getAll } from "../API/Api";

const Home = () => {
  const [accommodations, setAccommodations] = useState([]);

  const loadAccommodations = async () => {
    setAccommodations(await getAll());
  };

  useEffect(() => {
    loadAccommodations();
  }, []);

  return (
    <div className="container">
      <Header />
      <main>
        <div className="slogan">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <section className="cards">
          {accommodations.map((accommodation) => (
            <Cards key={accommodation.id} accommodation={accommodation} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
