import React, { Component } from "react";
import "./Parcours.css";

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
          <br />

          <div className="row">
            <div className="col-6">
              <span> Juin 2006 à mai 2017 </span>
              <h5> Chargé d 'affaire géotechnique : EgSol</h5>
              <ul>
                <li> Préparation de chantier(DICT, plans, ...) </li>
                <li> Gestion des clients</li>
                <li> Réalisation de sondage in -situ</li>
                <li> Rédaction de rapport de type G1, G2 et G5 </li>
              </ul>
            </div>
            <div className="col-6">
              <span>Avril à mai 2006</span>
              <h5>Technicien en pathologie : CEBTP </h5>
              <ul>
                <li> Préparation de chantier </li>
                <li> Réalisation de carottages </li>
                <li> Redaction de compte-rendu</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <span>Novembre2005 à Février 2006</span>
            <h5>Conducteur de travaux : Lacroix Signalisation </h5>
            <ul>
              <li> Préparation de chantier </li>
              <li> Echanges avec les différents intervenants </li>
              <li> Suivi du chantier </li>
            </ul>
          </div>
          <div className="col-4">
            <span>Avril à Septembre 2005</span>
            <h5>Technicien de Laboratoire : Appia</h5>
            <ul>
              <li> Contrôle des formules des enrobés </li>
              <li> Réalisation d 'essais de chargement à la plaque</li>
              <li> Redaction de compte rendu des réusltats </li>
            </ul>
          </div>
          <div className="col-4">
            <span>Ete 2002 et 2003</span>
            <h5> Autres expériences professionnelles</h5>
            <p className="pFont"> Agent d’ accueil : Vulcania </p>
            <p className="pFont">Guide– Animateur : Volcan de Lemptegy </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Parcours;
