import React, { Component } from "react";
import "./Formation.css";

class Formation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <h3 >Formation</h3>
        <br />
        <div className="row colle">
          <div className="col-4">
            <h5>FORMATION DEVELOPPEUR WEB</h5>
            <p>Wild Code School - Lyon</p>
            <span>Spécialisation Javascript</span>
          </div>
          <div className="col-4 ">
            <h5>MAITRISE Sciences exactes et naturelles</h5>
            <p>Université Blaise Pascal – Clermont Ferrand</p>
            <span>
              Mention Sciences de la Terre et de l'Univers : Option
              Géotechnique
            </span>
          </div>
          <div className="col-4">
            <h5>DEUG Sciences exactes et naturelles</h5>
            <p>Université Blaise Pascal – Clermont Ferrand</p>
            <span>
              Mention Sciences de la Terre et de l'Univers : Option
              Volcanologie
            </span>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4 ">
            <span>2018</span>
            <hr className="petitTrait traitBas" />
            <p className="colle traitVertHaut">|</p>
          </div>
          <div className="col-4 ">
            <span>2004-2003</span>
            <hr className="petitTrait traitBas" />
            <p className="colle traitVertHaut">|</p>
          </div>
          <div className="col-4 ">
            <span>2002-2000</span>
            <hr className="petitTrait traitBas" />
            <p className="colle traitVertHaut">|</p>
          </div>
        </div>
        <hr className="dateLigne" />
        <div className="row">
          <div className="offset-2 col-4 ">
            <p className="colle traitVertBas">|</p>
            <hr className="petitTrait traitHaut" />
            <span>2005-2004</span>
          </div>
          <div className="col-4 ">
            <p className=" colle traitVertBas">|</p>
            <hr className="petitTrait traitHaut" />
            <span>2003-2002</span>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="offset-2 col-4">
            <h5>MASTER PROFESSIONNEL</h5>
            <p>Université Blaise Pascal – Clermont Ferrand</p>
            <span>Géologie de l’aménagement </span>
          </div>
          <div className="col-4">
            <h5>LICENCE Sciences exactes et naturelles</h5>
            <p>Université Blaise Pascal – Clermont Ferrand</p>
            <span>
              Mention Sciences de la Terre et de l'Univers : Option
              Volcanologie
            </span>
          </div>
        </div>
      </div>;
  }
}

export default Formation;
