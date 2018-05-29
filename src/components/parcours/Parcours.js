import React, { Component } from "react";
import "./Parcours.css";

class Parcours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <h3> Parcours professionnel </h3>
        <br />

        <div className="row">
          <div className="col-4">
            <h5> Chargé d'affaires géotechnique : EgSol</h5>

            <p className="descriptionParcours">
              Préparation de chantier(DICT, plans, ...)<br />
            </p>
            <p className="descriptionParcours">
              Gestion des clients<br />
            </p>
            <p className="descriptionParcours">
              Réapsation de sondage in-situ<br />
            </p>
            <p className="descriptionParcours">
              {" "}
              Rédaction de rapports de type G1, G2 et G5{" "}
            </p>
          </div>
          <div className="col-4">
            <h5>Conducteur de travaux : Lacroix Signalisation </h5>

            <p className="descriptionParcours">
              Préparation de chantier<br />
            </p>
            <p className="descriptionParcours">
              Echanges avec les différents intervenants<br />
            </p>
            <p className="descriptionParcours">
              Suivi du chantier <br />
            </p>
          </div>
          <div className="col-4">
            <h5> Autres expériences professionnelles</h5>
            <p className="pFont"> Agent d’ accueil : Vulcania </p>
            <p className="pFont">Guide– Animateur : Volcan de Lemptegy </p>
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
            <span>Novembre2005 à Février 2006</span>
            <hr className="petitTrait traitBas" />
            <p className="colle traitVertHaut">|</p>
          </div>
          <div className="col-4 ">
            <span>Ete 2002 et 2003</span>
            <hr className="petitTrait traitBas" />
            <p className="colle traitVertHaut">|</p>
          </div>
        </div>
        <hr className="dateLigne" />
        <div className="row">
          <div className="offset-2 col-4 ">
            <p className="colle traitVertBas">|</p>
            <hr className="petitTrait traitHaut" />
            <span>Avril à mai 2006</span>
          </div>
          <div className="col-4 ">
            <p className=" colle traitVertBas">|</p>
            <hr className="petitTrait traitHaut" />
            <span>Avril à Septembre 2005</span>
          </div>
        </div>
        <div className="row">
          <div className="offset-2 col-4">
            <h5>Technicien en pathologie : CEBTP </h5>

            <p className="descriptionParcours">
              Préparation de chantier<br />
            </p>
            <p className="descriptionParcours">
              Réalisation de carottages<br />
            </p>
            <p className="descriptionParcours">
              Redaction de compte-rendu<br />
            </p>
          </div>
          <div className="col-4">
            <h5>Technicien de Laboratoire : Appia</h5>

            <p className="descriptionParcours">
              Contrôle des formules des enrobés<br />
            </p>
            <p className="descriptionParcours">
              Réalisation d'essais de chargement à la plaque<br />
            </p>
            <p className="descriptionParcours">
              Rédaction de compte rendu des résultats<br />
            </p>
          </div>
        </div>
      </div>;
  }
}

export default Parcours;
