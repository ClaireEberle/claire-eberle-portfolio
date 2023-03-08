import React from 'react'
import './style.css';

export const Resume  = () => {
  return (
    <div className='resume-box'> 
      <h2>You may download my resume here:</h2>
      <h3><a href="#">Resume</a></h3>
      <div className='resume-list'>

      <h4>Front-end Proficiencies</h4>
      <ul className='ul-resume front-end'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      </div>
      <div className='resume-list'>

      <h4>Back-end Proficiencies</h4>
      <ul className='ul-resume back-end'>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      </div>
       </div>
  )
}
