import "./portfolio.css";

import IMG1 from "../../assets/Electric-scooter.PNG";
import IMG2 from "../../assets/sudoku.PNG";
import IMG3 from "../../assets/dragdrop.PNG";
import IMG4 from "../../assets/Education.PNG";
import IMG5 from "../../assets/SabiMed.PNG ";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Electric Scooter",
      img: IMG1,
      description:
        "Demo website for people to buy scooters and scooter locks conveniently.",
      technologies: "React | CSS | Redux ",
      link: "https://electric-scooter.vercel.app",
    },
    {
      id: 2,
      title: "SabiMed",
      img: IMG5,
      description:
        "Demo website to provide people with health services conveniently.",
      technologies: "React | CSS | Redux ",
      link: "https://sabimed.vercel.app/",
    },
    {
      id: 3,
      title: "Academia Education",
      img: IMG4,
      description:
        "Demo website for people's convenient education.",
      technologies: "React | CSS | Redux ",
      link: "https://education-bay.vercel.app/",
    }


  ];
  const games = [

    {
      id: 1,
      title: "Sudoku Game",
      img: IMG2,
      description:
        "demo web site for people to Sudoku Game and Sudoku locks conveniently.",
      technologies: "Html | CSS | Js ",
      link: "https://sudokugamev1.vercel.app/",
    },
    {
      id: 2,
      title: "Drag And Drop",
      img: IMG3,
      description:
        "demo web site for people to Drag Game and Drop locks conveniently.",
      technologies: "Html | CSS | Js ",
      link: "https://drag-dropv1.vercel.app/",
    }, 
    {
      id: 3,
      title: "Todo List",
      img: IMG3,
      description:
        "demo web site for people to Todo List and Todo conveniently.",
      technologies: "Html | CSS | Js ",
      link: "https://todolist-tau-neon.vercel.app/",
    }

  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <br />
      <h2>Web Sites</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">

              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
      <br />

      <h2>Web Games</h2>

      <div className="container portfolio__container">
        {games.map((pros) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pros.img} alt={pros.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pros.title}</h3>
              <p>{pros.description}</p>
              <p>{pros.technologies}</p>
            </div>
            <div className="portfolio__item-cta">

              <a
                href={pros.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
