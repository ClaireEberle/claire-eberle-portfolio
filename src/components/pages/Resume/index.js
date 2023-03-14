import React from 'react'
import './style.css';

export const Resume  = () => {

  const resumeBtn = () => {
    // using Java Script method to get PDF file
    fetch('resume_ClaireEberle.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume_ClaireEberle.pdf';
            alink.click();
        })
    })
}

  return (
    <div className='resume-box'> 
      <h2>You may download my resume here:</h2>
      <button className='resumeButton' onClick={resumeBtn}>Resume</button>
      
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
