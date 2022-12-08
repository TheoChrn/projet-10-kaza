import Header from "../components/Header";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import { getAll } from "../API/Api";
import Banner from "../components/Banner";
import homeBackgroundDesktop from "../assets/Images/home-background.svg";
import homeBackgroundMobile from "../assets/Images/home-background-mobile.svg";

const Home = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [background, setBackground] = useState(homeBackgroundDesktop);

  const loadAccommodations = async () => {
    setAccommodations(await getAll());
  };

  const reSize = () => {
    console.log(background);
    if (window.innerWidth >= 1024) {
      setBackground(homeBackgroundDesktop);
    } else {
      setBackground(homeBackgroundMobile);
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
