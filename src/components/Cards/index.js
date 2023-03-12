import React from 'react'

const styleCard = {
width: "18rem",
margin: "10px"
}
export const Cards = (props) => {

    return (
      <div>
        <div className='card' style={styleCard}>
            <img src={props.image} className="card-img-top" alt="Project Image"/>
            <div className='card-body d-flex flex-column'>
            <h3 className='card-title'>{props.title}</h3>
            <p className='card-text'>{props.description}</p> 
            <a href={props.github} class="card-link">GitHub</a>
    <a href={props.site} class="card-link">Site Link</a>
            
            </div>
        </div>
    </div>
  )
}
