import React, { Component } from "react";
import "./Formation.css";

class Formation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <h3 className="droite">Formation</h3>
        <br />
        <div className="row">
          <div className="offset-2 col-4">
            <span>2018</span>
            <h5>FORMATION DEVELOPPEUR WEB</h5>
            <p>Wild Code School - Lyon</p>
            <span>Spécialisation Javascript</span>
          </div>
          <div className="col-4 ">
            <span>2004-2005</span>
            <h5>MASTER PROFESSIONNEL</h5>
            <p>Université Blaise Pascal – Clermont Ferrand</p>
            <span>Géologie de l’aménagement </span>
          </div>
        </div>
        <br />>
        <div className="row">
          <div className="col-4">
            <span>2003-2004</span>
            <h5>MAITRISE Sciences exactes et naturelles</h5>
            <p>Université Blaise Pascal – Clermont Ferrand</p>
            <span>
              Mention Sciences de la Terre et de l’univers <br />Option Géotechnique
            </span>
          </div>
          <div className="col-4">
            <span>2002-2003</span>
            <h5>LICENCE Sciences exactes et naturelles</h5>
            <p>Université Blaise Pascal – Clermont Ferrand</p>
            <span>
              Mention Sciences de la Terre et de l’univers <br />Option Volcanologie
            </span>
          </div>
          <div className="col-4">
            <span>2000-2002</span>
            <h5>DEUG Sciences exactes et naturelles</h5>
            <p>Université Blaise Pascal – Clermont Ferrand</p>
            <span>
              Mention Sciences de la Terre et de l’univers <br />Option Volcanologie
            </span>
          </div>
        </div>
      </div>;
  }
}

export default Formation;
