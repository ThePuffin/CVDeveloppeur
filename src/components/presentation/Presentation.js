import React, { Component } from "react";
import "./Presentation.css";
import photoProfil from "../../images/vince.jpg";

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "BALLUT",
      prenom: "Vincent",
      poste: "Développeur WEB junior",
      rue: "3 boulevard Eugène Reguillon",
      ville: "69100 VILLEURBANNE",
      tel: "07.81.53.05.38",
      mail: "ballutvincent@gmail.com",
      github: "ThePuffin",
      twitter: "Vincent_Ballut",
      nationalite: "Nationalité française",
      situation: "Celibataire",
      anniversaire: "1981/08/13"
    };
    this.age = this.age.bind(this);
  }
  age(anniversaire) {
    let birthdate = new Date(anniversaire);
    let cur = new Date();
    let diff = cur - birthdate;
    let age = Math.floor(diff / 31557600000);
    return age;
  }
  render() {
    return <div>
        <div className="row">
          <div className="container d-none d-md-block col-md-4 ">
            <img className="imgProfil" src={photoProfil} alt="Vincent BALLUT" />
          </div>
          <br />
          <div className="container col-sm-12 col-md-8">
            <div className="row lignePresentation">
              <h1 className="col-sm-4 col-6">
                {this.state.nom} {this.state.prenom}
              </h1>

              <h2 className="col-sm-4 col-6">{this.state.poste}</h2>
            </div>

            <div className="row">
              <div className="col-sm-4 col-6">
                <br />
                <p className="headerFont">
                  <i className="fas fa-road" /> {this.state.rue}
                </p>
                <p className="headerFont">
                  <i className="fas fa-home" /> {this.state.ville}
                </p>
                <br />
                <p className="headerFont">
                  <i className="fas fa-phone-square" /> Téléphone: {this.state.tel}
                </p>
                <p className="headerFont">
                  <i className="fas fa-envelope-square" /> Email: {this.state.mail}
                </p>
              </div>
              <div className="col-sm-4 col-6">
                <br />
                <p className="headerFont">
                  <i className="fas fa-birthday-cake"> </i>
                  &nbsp;
                  {this.age(this.state.anniversaire)} ans
                </p>
                <p className="headerFont">
                  <i className="fas fa-flag" /> {this.state.nationalite}
                </p>
                <br />
                <p className="headerFont">
                  <i className="fab fa-github-square" /> GitHub: {this.state.github}
                </p>
                <p className="headerFont">
                  <i className="fab fa-twitter-square" /> Twitter: {this.state.twitter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Presentation;
