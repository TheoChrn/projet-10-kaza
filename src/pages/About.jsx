import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Header from "../components/Header";
import mobileAboutBackground from "../assets/Images/background-about-mobile.jpg";
import desktopAboutBackground from "../assets/Images/Background-desktop.jpg";

const About = () => {
  const [background, setBackground] = useState(
    window.innerWidth >= 768 ? desktopAboutBackground : mobileAboutBackground
  );
  const collapses = [
    {
      value: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      value: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      value: "Service",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      value: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  const reSize = () => {
    if (window.innerWidth >= 768) {
      setBackground(desktopAboutBackground);
    } else {
      setBackground(mobileAboutBackground);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", reSize);
    return () => {
      window.removeEventListener("resize", reSize);
    };
  }, [background]);

  return (
    <div className="container">
      <Header />
      <main>
        <Banner img={background} className="background background--bg" />
        <Collapse content={collapses} />
      </main>
    </div>
  );
};

export default About;

{
  /*<section className="collapses collapses--full">
          <Collapse />
          collapses.map((c) => (
            <Collapse
              key={c.value}
              value={c.value}
              description={c.description}
            />
          ))
        </section>*/
}
