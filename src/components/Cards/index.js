import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const styleCard = {
  width: "18rem",
  margin: "10px",
  color: "white",
};
const styleCard2 = {
  height: "10rem",
};
export const Cards = (props) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="card bg-dark" style={styleCard}>
        <img
          src={props.image}
          className="card-img-top"
          style={styleCard2}
          alt="Project Image"
        />
        <div className="card-body ">
          <h3 className="card-title">{props.title}</h3>
          {/* <p className='card-text'>{props.description}</p>  */}
          <a href={props.github} class="card-link">
            Github
          </a>
          {props.site ? (
            <a href={props.site} class="card-link">
              Site Link
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
