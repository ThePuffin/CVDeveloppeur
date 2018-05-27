import React, { Component } from "react";

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rue: "3 boulevard Eugène Reguillon",
      ville: "69100 VILLEURBANNE",
      tel: "07.81.53.05.38",
      mail: "ballutvincent@gmail.com",
      github: "ThePuffin",
      twitter: "Vincent_Ballut",
      vehicule: "vehicule personnel",
      situation: "Celibataire"
    };
  }
  render() {
    return (
      <div className="Container">
        <div className="row">
          <div className="container col-6">
            <p>{this.state.rue}</p>
            <p>{this.state.ville}</p>
            <br />
            <p>{this.state.vehicule}</p>
          </div>
          <div className="Container col-6">
            <p>Téléphone : {this.state.tel}</p>
            <p>Email : {this.state.mail}</p>
            <p>GITHUB : {this.state.github}</p>
            <p>Twitter: {this.state.twitter}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
