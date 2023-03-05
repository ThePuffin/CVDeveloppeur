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
          <h3 className="rightSide">Réalisations WEB</h3>
          <p>
            <p>
              <a target="_blank" href="https://www.parkinsaclay.fr">
                <b>Parkin'Saclay : </b>
                application web de stationnement sur le plateau de Saclay
                <i> - Projet client </i>
              </a>
            </p>
            <a target="_blank" href="https://www.numahealth.com/">
              <b>Numa Health Pilot : </b>
              application web médicale visant à surveiller et améliorer la santé de patients
              <i> - Projet client </i>
            </a>
          </p>
          <p>
            <a target="_blank" href="https://mobility.by.colas.com/offre-de-services/anais.html">
              <b>Anais : </b>
              application web d'étude et amélioration du système routier
              <i> Projet client </i>
            </a>
          </p>
          <p>
            <a target="_blank" href="https://mobility.by.colas.com/offre-de-services/qievo.html">
              <b>Qievo </b>
              application web de gestion de flux de travailleur
              <i> - Projet client </i>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Projets;
