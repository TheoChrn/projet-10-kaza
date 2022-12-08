import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Header from "../components/Header";
import aboutBackgroundMobile from "../assets/Images/about-background.svg";
import aboutBackgroundDesktop from "../assets/Images/about-background-desktop.svg";

const About = () => {
  const [background, setBackground] = useState(aboutBackgroundDesktop);
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
    console.log(background);
    if (window.innerWidth >= 1024) {
      setBackground(aboutBackgroundMobile);
    } else {
      setBackground(aboutBackgroundDesktop);
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
        <Banner
          img={
            window.innerWidth > 1024
              ? aboutBackgroundMobile
              : aboutBackgroundDesktop
          }
          className="background background--bg"
        />
        <section className="collapses">
          {collapses.map((c) => (
            <Collapse
              key={c.value}
              value={c.value}
              description={c.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default About;
