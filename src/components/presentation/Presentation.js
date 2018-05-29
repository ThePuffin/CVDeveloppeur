import React, { Component } from "react";
import "./Presentation.css";

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
      vehicule: "Véhicule personnel",
      situation: "Celibataire",
      anniversaire : "1981/08/13"
    }
    // Age(){
    //   let birthdate = new Date({this.state.anniversaire});
    //   let cur = new Date();
    //   let diff = cur-birthdate;
    //   let age = Math.floor(diff/31557600000);
    //   return age;
    // }
  }
  render() {
    return <div className="Container">
        <br />
        <div className="row">
          <div className="container col-4">
            <br />
            <p className="headerFont">
              <i class="fas fa-road" /> {this.state.rue}
            </p>
            <p className="headerFont">
              <i class="fas fa-home" /> {this.state.ville}
            </p>

            <p className="headerFont">
              <i class="fas fa-car" />
              {this.state.vehicule}
            </p>
            <p className="headerFont">
              <i class="fas fa-fast-forward" /> {}
            </p>
          </div>
          <div className=" col-4">
            <img className="imgProfil" src="https://media.licdn.com/dms/image/C5603AQHsaD85_sHIOA/profile-displayphoto-shrink_200_200/0?e=1533168000&v=beta&t=rYIDZU0nlnqJSRtIcB5TOVO5insys-ErATt3lj1aQYI" alt="Vincent BALLUT" />
          </div>
          <div className="Container col-4">
            <br />
            <p className="headerFont">
              <i class="fas fa-phone-square" /> Téléphone : {this.state.tel}
            </p>
            <p className="headerFont">
              <i class="fas fa-envelope-square" /> Email : {this.state.mail}
            </p>
            <p className="headerFont">
              <i class="fab fa-github-square" /> GitHub : {this.state.github}
            </p>
            <p className="headerFont">
              <i class="fab fa-twitter-square" /> Twitter : {this.state.twitter}
            </p>
          </div>
        </div>
      </div>;
  }
}

export default Presentation;
