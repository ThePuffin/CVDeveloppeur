import React, { Component } from "react";

class Parcours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <h3> Parcours professionnel </h3>
          <h4> Principales expériences professionnelles </h4>
          <div className="row">
            <div className="col-4">
              <span> Juin 2006 à mai 2017 </span>
              <h5>
                Technicien / Chargé d 'affaire géotechnique pour EGSOL  (69 St
                Priest)
              </h5>
              <ul>
                <li> Préparation de chantier(DICT, plans, ...) </li>
                <li>
                  Réalisation de sondage in -situ Sondages à la pelle mécanique
                </li>
                <li> Sondages au pénétromètre stato - dynamique </li>
                <li> Réalisation d 'essais de chargement à la plaque </li>
                <li> Dépouillement des résultats obtenus </li>
                <li>
                  {" "}
                  Echanges avec clients avant et pendant l 'intervention{" "}
                </li>
                <li> Rédaction de rapport de type G1, G2 et G5 </li>
                <li> Amélioration des annexes de rapport </li>
              </ul>
            </div>
            <div className="col-4">
              <span>Avril à mai 2006</span>
              <h5>Technicien en pathologie pour CEBTP (69 St Priest)</h5>
              <ul>
                <li> Préparation de chantier </li>
                <li> Réalisation de carottages </li>
              </ul>
            </div>
            <div className="col-4">
              <span>Novembre2005 à Février 2006</span>
              <h5>
                Conducteur de travaux pour LACROIX Signalisation (69 Venissieux)
              </h5>
              <ul>
                <li> Préparation de chantier </li>
                <li> Echanges avec les différents intervenants </li>
                <li> Suivi du chantier </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <span>Avril à Septembre 2005</span>
            <h5>Technicien de Laboratoire pour APPIA(69 Corbas)</h5>
            <p> Stage de fin d 'étude </p>
            <ul>
              <li> Contrôle des formules des enrobés </li>
              <li> Réalisation d 'essais de chargement à la plaque</li>
              <li> Redaction de compte rendu des réusltats </li>
            </ul>
          </div>
            <div className="col-6">
              <h5> Autres expériences professionnelles: job d 'été</h5>
              <p> Agent d’ accueil à VULCANIA(63) </p>
              <p> Guide– Animateur au VOLCAN DE LEMPTEGY(63) </p>
              <p> Manutentionnaire CETEK(63) </p>
            </div>
        </div>
      </div>
    );
  }
}

export default Parcours;
