import React, {useState} from 'react'
import "./style.css"
import { Cards } from "../../Cards"
import jolly from  "../../../images/jolly.png"
import stream from "../../../images/stream.png"
import saveSeat from "../../../images/saveSeat.png"
import popQuiz from "../../../images/popQuiz.png"
import techspot from "../../../images/techspot.png"
import weather from "../../../images/weather.png"
import mountains from "../../../images/mountains.jpg"



export const Portfolio = () => {

  const [projects, setProjects] = useState([
    {
      "image": jolly,
      "title":"Jolly Co-op",
      "description":"Project 3",
      "linkGithub": "https://github.com/CaldwellDerek/jolly-co-op-frontend",
      "linkSite":"https://jollycoop.netlify.app/"
    },
    {
      "image": stream,
      "title":"Streamasaurus",
      "description":"Project 1",
      "linkGithub": "https://github.com/wabarringer/project-1",
      "linkSite":"https://claireeberle.github.io/Streamosaurus/"
    },
    {
      "image": saveSeat,
      "title":"Save Your Seat",
      "description":"This project is nice",
      "linkGithub": "https://github.com/ClaireEberle/Save-Your-Seat",
      "linkSite":"https://make-reservation.herokuapp.com/"
    },
    {
      "image": popQuiz,
      "title":"New Mexico Quiz",
      "description":"This project is not good",
      "linkGithub": "https://github.com/ClaireEberle/New-Mexico-Pop-Quiz",
      "linkSite":"https://claireeberle.github.io/New-Mexico-Pop-Quiz/"
    },
    {
      "image": techspot,
      "title":"Tech Blog",
      "description":"This project needs improvement",
      "linkGithub": "https://github.com/ClaireEberle/New-Mexico-Pop-Quiz",
      "linkSite":"https://the-tech-spot-blog.herokuapp.com/"
    },
    {
      "image": weather,
      "title":"Weather Tracker",
      "description":"This project needs improvement",
      "linkGithub": "https://github.com/ClaireEberle/Weather-Tracker",
      "linkSite":"https://claireeberle.github.io/Weather-Tracker/"
      
    }
    
  ])
  return (
    <div className='portfolio-div'>
      <h1 className='portfolio-head'>Portfolio</h1>
      <div className='container-fluid gallery'>

      <div className='row'>


      {projects.map(project=>
      <Cards image={project.image} title={project.title} description={project.description} github={project.linkGithub} site={project.linkSite}/>
      )}
      </div>
      </div>
      </div>

  )
}
