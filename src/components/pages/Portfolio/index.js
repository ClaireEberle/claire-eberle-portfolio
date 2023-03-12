import React, {useState} from 'react'
import { Cards } from "../../Cards"

export const Portfolio = () => {

  const [projects, setProjects] = useState([
    {
      "image": "./stream.png",
      "title":"Streamasaurus",
      "description":"This project is d***",
      "linkGithub": "/",
      "linkSite":"/"
    },
    {
      "image": "./saveSeat.png",
      "title":"Save Your Seat",
      "description":"This project is nice",
      "linkGithub": "https://github.com/ClaireEberle/Save-Your-Seat",
      "linkSite":"https://make-reservation.herokuapp.com/"
    },
  ])
  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map(project=>
      <Cards image={project.image} description={project.description} github={project.linkGithub} site={project.linkSite}/>
        )}
    </div> 
  )
}
