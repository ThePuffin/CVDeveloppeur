import React, { Component } from "react";
import "./Formation.css";

class Formation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h3>Formation</h3>
        <h5>2018 => FORMATION DEVELOPPEUR WEB</h5>
        <p>
          
          Wild Code School - Lyon
          <span> : spécialisation Javascript</span>
        </p>
        <h5>2004-2005 => MASTER PROFESSIONNEL</h5>
        <p>
          Université Blaise Pascal – Clermont Ferrand
          <span> : Géologie de l’aménagement </span>
        </p>
        <h5>2003-2004 => MAITRISE Sciences exactes et naturelles</h5>
        <p>
          Université Blaise Pascal – Clermont Ferrand
          <span> : Mention Sciences de la Terre et de l’univers Option Géotechnique 
          </span>
        </p>
        <h5>2002-2003 => LICENCE Sciences exactes et naturelles</h5>
        <p>
          Université Blaise Pascal – Clermont Ferrand
          <span> : Mention Sciences de la Terre et de l’univers Option Volcanologie
          </span>
        </p>
        <h5>2000-2002 => DEUG Sciences exactes et naturelles</h5>
        <p>
          Université Blaise Pascal – Clermont Ferrand
          <span>
             : Mention Sciences de la Terre et de l’univers Option Volcanologie
          </span>
        </p>
      </div>
    );
  }
}

export default Formation;
