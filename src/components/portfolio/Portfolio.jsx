import "./portfolio.css";

import IMG1 from "../../assets/Electric-scooter.PNG";
import IMG2 from "../../assets/sudoku.PNG";
import IMG3 from "../../assets/dragdrop.PNG";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Electric Scooter",
      img: IMG1,
      description:
        "demo web site for people to buy scooters and scooter locks conveniently.",
      technologies: "React | CSS | Redux ",
      link: "https://electric-scooter.vercel.app",
    },
    {
      id: 2,
      title: "Sudoku Game",
      img: IMG2,
      description:
        "demo web site for people to Sudoku Game and Sudoku locks conveniently.",
      technologies: "Html | CSS | Js ",
      link: "https://sudokugamev1.vercel.app/",
    },
    {
      id: 3,
      title: "Drag And Drop",
      img: IMG3,
      description:
        "demo web site for people to Drag Game and Drop locks conveniently.",
      technologies: "Html | CSS | Js ",
      link: "https://drag-dropv1.vercel.app/",
    }

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

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
    </section>
  );
};

export default Portfolio;
