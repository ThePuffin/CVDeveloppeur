import './Parcours.css';

import React, { Component } from 'react';

class Parcours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3> Parcours professionnel </h3>
        <br />

        <div className="row">
          <div className="col-4">
            <h5> Développeur WEB full-stack</h5>

            <p className="descriptionParcours">
              Analyse des besoins du client
              <br />
            </p>
            <p className="descriptionParcours">
              Réalisation de conceptions
              <br />
            </p>
            <p className="descriptionParcours">
              Développement front et back
              <br />
            </p>
            <p className="descriptionParcours"> Mise en production </p>
          </div>
          <div className="col-4">
            <h5>Technicien en pathologie : CEBTP </h5>

            <p className="descriptionParcours">
              Préparation de chantier
              <br />
            </p>
            <p className="descriptionParcours">
              Réalisation de carottages
              <br />
            </p>
            <p className="descriptionParcours">
              Rédaction de comptes-rendus <br />
            </p>
          </div>
          <div className="col-4">
            <h5> Autres expériences professionnelles</h5>
            <p className="pFont"> Agent d’ accueil : Vulcania </p>
            <p className="pFont">Guide– Animateur : Volcan de Lemptegy </p>
            <p className="pFont">Technicien de laboratoire : APPIA </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4 ">
            <span> Juin 2006 à mai 2017 </span>
            <hr className="petitTrait traitBas" />
            <p className="colle traitVertHaut">|</p>
          </div>
          <div className="col-4 ">
            <span>Avril à mai 2006</span>
            <hr className="petitTrait traitBas" />
            <p className="colle traitVertHaut">|</p>
          </div>
          <div className="col-4 ">
            <span>Avant novembre 2005</span>
            <hr className="petitTrait traitBas" />
            <p className="colle traitVertHaut">|</p>
          </div>
        </div>
        <hr className="dateLigne" />
        <div className="row">
          <div className="offset-2 col-4 ">
            <p className="colle traitVertBas">|</p>
            <hr className="petitTrait traitHaut" />
            <span> Juin 2006 à mai 2017 </span>
          </div>
          <div className="col-4 ">
            <p className=" colle traitVertBas">|</p>
            <hr className="petitTrait traitHaut" />
            <span>Novembre 2005 à Février 2006</span>
          </div>
        </div>
        <div className="row">
          <div className="offset-2 col-4">
            <h5> Chargé d'affaires géotechnique : EgSol</h5>

            <p className="descriptionParcours">
              Préparation de chantier(DICT, plans, ...)
              <br />
            </p>
            <p className="descriptionParcours">
              Gestion des clients
              <br />
            </p>
            <p className="descriptionParcours">
              Réalisation de sondage in-situ
              <br />
            </p>
            <p className="descriptionParcours"> Rédaction de rapports de type G1, G2 et G5 </p>
          </div>
          <div className="col-4">
            <h5>Conducteur de travaux : Lacroix Signalisation </h5>

            <p className="descriptionParcours">
              Préparation de chantier
              <br />
            </p>
            <p className="descriptionParcours">
              Echanges avec les différents intervenants
              <br />
            </p>
            <p className="descriptionParcours">
              Suivi du chantier <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Parcours;
