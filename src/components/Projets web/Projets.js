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
            <b>Mademoiselle FLE : </b>
            back-office d'un site d'apprentissage du français
            <i> - Projet client{" "}
            </i> 
          </p> <p>
            <b>La route des vins : </b>
            application mobile d'ajout de contenu pour une application vocale
            <i> - Projet client
            </i> 
          </p>
          <p>
            <b>Bugcooker : </b>
            site internet d'un restaurant gastronomique autour des insectes
            <i>- Projet fictif</i>
          </p> 
           <p>
            <b>Space meat : </b>
            application mobile de rencontre sur le thème de star wars
            <i> - Hackaton</i>
          </p>
          <p>
            <b>Captain JSON : </b>
            encyclopédie WEB sur le thème des super-héros
            <i>
               - Hackaton
            </i> 
          </p>
        </div>
      </div>;
  }
}

export default Projets;
