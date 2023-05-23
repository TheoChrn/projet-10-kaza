import Header from "../components/Header";
import Cards from "../components/Cards";
import data from "../data.json";

const Home = () => {
  const accommodation = data;

  return (
    <div className="container">
      <Header />
      <main>
        <div className="slogan">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <section className="cards">
          {accommodation.map((accommodation) => (
            <Cards key={accommodation.id} accommodation={accommodation} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
