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
      <img style={styleCard} src={profilePicture} alt="Claire Eberle"></img>

    <h1>About Me</h1> 
    <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
    </p>
    </div>
  )
}
