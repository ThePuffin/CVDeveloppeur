import React, { Component } from "react";
import "./Interets.css";

class Interets extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3 className="droite largeur">Intêrets</h3>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p className="pFont">
                <i className="fas fa-book" /> Lecture
              </p>

              <p className="pFont">
                <i className="fas fa-film" /> Cinéma
              </p>
              <p className="pFont">
                <i className="fas fa-headphones" /> Musique
              </p>
              <p className="pFont">
                <i className="fas fa-gamepad" /> Jeux vidéos
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p className="pFont">
                <i className="fas fa-plane" /> Voyages
              </p>
              <p className="pFont">
                <i className="fas fa-utensils" /> Gastronomie
              </p>
              <p className="pFont">
                <i className="fas fa-hockey-puck" /> Hockey
              </p>
              <p className="pFont">
                <i className="fas fa-football-ball" /> Rugby
              </p>
            </div>
         
          </div>
        </div>
      </div>
    );
  }
}

export default Interets;
