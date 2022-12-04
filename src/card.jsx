import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./App.css";

function Song(props) {
  return (
    <div className="card">
      <div className="row-posters ">
 <img className="profile-pic" src={props.img} ></img>
 <p className="agent-name" src={props.title}></p>
 <div className="star-rating"></div>
 <p className="agent-summary" src={props.artist}></p>
      
 </div>
    </div> 
  );
}

export default Song;
