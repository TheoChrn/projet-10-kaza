import Header from "../components/Header";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import { getAll } from "../API/Api";
import Banner from "../components/Banner";
import desktopHomeBackground from "../assets/Images/home-background.svg";
import mobilehomeBackground from "../assets/Images/home-background-mobile.svg";

const Home = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [background, setBackground] = useState(
    window.innerWidth >= 768 ? desktopHomeBackground : mobilehomeBackground
  );

  const loadAccommodations = async () => {
    setAccommodations(await getAll());
  };

  const reSize = () => {
    console.log(background);
    if (window.innerWidth >= 768) {
      setBackground(desktopHomeBackground);
    } else {
      setBackground(mobilehomeBackground);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", reSize);
    return () => {
      window.removeEventListener("resize", reSize);
    };
  }, [background]);

  useEffect(() => {
    loadAccommodations();
  }, []);

  return (
    <div className="container">
      <Header />
      <main>
        <Banner img={background} className="background" h1 />
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
