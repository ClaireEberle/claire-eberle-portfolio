import React, { useState } from "react";
import "./style.css";
import { Cards } from "../../Cards";
import jolly from "../../../images/jolly.png";
import stream from "../../../images/stream.png";
import saveSeat from "../../../images/saveSeat.png";
import techspot from "../../../images/techspot3.png";

export const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      image: jolly,
      title: "Jolly Co-op",
      description: "",
      linkGithub: "https://github.com/CaldwellDerek/jolly-co-op-frontend",
      linkSite: "https://jollycoop.netlify.app/",
    },
    {
      image: stream,
      title: "Streamasaurus",
      description: "",
      linkGithub: "https://github.com/wabarringer/project-1",
      linkSite: "https://claireeberle.github.io/Streamosaurus/",
    },
    {
      image: saveSeat,
      title: "Save Your Seat",
      description: "",
      linkGithub: "https://github.com/ClaireEberle/Save-Your-Seat",
      linkSite: "https://save-you-seat.herokuapp.com/",
    },

    {
      image: techspot,
      title: "Tech Blog",
      description: "",
      linkGithub: "https://github.com/ClaireEberle/The-Tech-Spot",
      linkSite: "https://the-tech-spot-blog.herokuapp.com/",
    },
  ]);
  return (
    <div className="portfolio-div">
      <h1 className="portfolio-head">Portfolio</h1>
      <div className="container-fluid gallery">
        <div className="row">
          {projects.map((project) => (
            <Cards
              image={project.image}
              title={project.title}
              description={project.description}
              github={project.linkGithub}
              site={project.linkSite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
