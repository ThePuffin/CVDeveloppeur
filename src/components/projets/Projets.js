import React, { Component } from 'react';

class Projets extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="col-sm-12 col-md-12">
          <h3 className="droite">Réalisations WEB</h3>
          <p>
            <p>
              <a href="https://www.parkinsaclay.fr/recherche">
                <b>Parkin'Saclay : </b>
                application web de stationnement sur le plateau de Saclay
                <i> - Projet client </i>
              </a>
            </p>{' '}
            <a href="https://www.numahealth.com/entreprise-programme/">
              <b>Numa Health Pilot : </b>
              application web médicale visant à surveiller et améliorer la santé de patients
              <i> - Projet client </i>{' '}
            </a>
          </p>{' '}
          <p>
            <a href="https://mobility.by.colas.com/offre-de-services/anais.html">
              <b>Anais : </b>
              application web d'étude et amélioration du système routier
              <i> Projet client </i>{' '}
            </a>
          </p>{' '}
          <p>
            <b>La route des vins : </b>
            application mobile d'ajout de contenu pour une application vocale
            <i> - Projet client non abouti</i>
          </p>
        </div>
      </div>
    );
  }
}

export default Projets;
