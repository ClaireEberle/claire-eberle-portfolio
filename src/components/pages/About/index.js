import React from 'react'
import "./style.css"
import  profilePicture  from '../../../images/headShot.png'



const styleCard = {
  width:"200px",
height:"260px",
marginLeft: "1%",
marginTop: "3%"
}
export const About = () => {
  return (
    <div className='about'>

    <h1>About Me</h1> 
    <p>
    I am a Full Stack Web Developer with a background in Environmental Toxicology.
I am a graduate of the University of Washington's Full Stack Web Development Certificate Program. I am interested in Web Developer and Junior Software Development roles at the intersection of technology and Environmental Science.
I am a creative, thorough problem-solver with a ready-to-learn attitude, and a passion for utility, beauty, and a positive user experience.
    </p>
      <img style={styleCard} src={profilePicture} alt="Claire Eberle"></img>
    </div>
  )
}
