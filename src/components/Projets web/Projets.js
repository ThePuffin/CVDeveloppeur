import React, { Component } from "react";

class Projets extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <div className="col-sm-12 col-md-12">
          <h3 className="droite">Projets WEB</h3>
          <p>
            <b>Bugcooker : </b>
          <span>(Projet fictif) </span><br />
            site internet d'un restaurant gastronomique autour des insectes
          </p> <p>
            <b>Mademoiselle FLE : </b>
            <span>(Projet client) </span>{" "}<br/>
            back-office d'un site de vidéos et d'exercice pour l'apprentissage du français
          </p> <p>
            <b>La route des vins : </b>
          <span>(Projet client) </span>{" "}<br />
            La route des vins : application WEB pour ajout de contenu d'une application vocale.
          </p> <p>
            <b>Space meat : </b>
          <span>(Hackaton) </span><br />
            application mobile de rencontre sur le thème de star wars
          </p>
          <p>
                <b>Captain JSON : </b>
          <span>(Hackaton) </span>{" "}<br />
            encyclopédie WEB sur le thème des super-héros
          </p>
        </div>
      </div>;
  }
}

export default Projets;
