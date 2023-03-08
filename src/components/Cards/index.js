import React from 'react'

export const Cards = (props) => {
  return (
    <div>
        <div className='card'>
            <img src={props.img} className="card-img" alt="Project Image"/>
            <div className='card-body'>
            <h3>{props.title}</h3>
            <p className='card-text'>{props.description}</p>
            
            </div>
        </div>
    </div>
  )
}
