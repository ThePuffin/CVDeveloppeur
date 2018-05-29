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
        <h3 className="droite">Centres d'intêrets</h3>
        <br />
          <div className="container">
        <div className="row">
            <div className="col-6">
              <p className="pFont">
                <i class="fas fa-book" /> Lecture
              </p>

              <p className="pFont">
                <i class="fas fa-film" /> Cinéma
              </p>
              <p className="pFont">
                <i class="fas fa-headphones" /> Musique
              </p>
              <p className="pFont">
                <i class="fas fa-gamepad" /> Jeux vidéos
              </p>
            </div>
            <div className="col-6">
              <p className="pFont">
                <i class="fas fa-plane" /> Voyages
              </p>
              <p className="pFont">
                <i class="fas fa-utensils" /> Gastronomie
              </p>
              <p className="pFont">
                <i class="fas fa-hockey-puck" /> Hockey
              </p>
              <p className="pFont">
                <i class="fas fa-football-ball" /> Rugby
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interets;
