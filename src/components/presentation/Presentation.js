import React, {
  Component
} from "react";
import "./Presentation.css";
import photoProfil from "../../images/vinz.jpg";

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
    return <div className = "row" >
      <
      div className = "container col-4" >
      <
      img className = "imgProfil"
    src = {
      photoProfil
    }
    alt = "Vincent BALLUT" / >
      <
      /div>

      <
      br / >
      <
      div className = "container col-8" >
      <
      div className = "row" >
      <
      div className = "col-6" >
      <
      br / >
      <
      p className = "headerFont" >
      <
      i class = "fas fa-road" / > {
        this.state.rue
      } <
      /p> <
      p className = "headerFont" >
      <
      i class = "fas fa-home" / > {
        this.state.ville
      } <
      /p> <
      br / >
      <
      p className = "headerFont" >
      <
      i class = "fas fa-phone-square" / > Téléphone: {
        this.state.tel
      } <
      /p> <
      p className = "headerFont" >
      <
      i class = "fas fa-envelope-square" / > Email: {
        this.state.mail
      } <
      /p> <
      /div> <
      div className = "col-6" >
      <
      br / >
      <
      p className = "headerFont" >
      <
      i class = "fas fa-birthday-cake" > < /i> {this.age(this.state.anniversaire)} ans <
      /p> <
      p className = "headerFont" >
      <
      i class = "fas fa-flag" / > {
        this.state.nationalite
      } <
      /p> <
      br / >
      <
      p className = "headerFont" >
      <
      i class = "fab fa-github-square" / > GitHub: {
        this.state.github
      } <
      /p> <
      p className = "headerFont" >
      <
      i class = "fab fa-twitter-square" / > Twitter: {
        this.state.twitter
      } <
      /p> <
      /div> <
      /div> <
      /div> <
      /div>;
  }
}

export default Presentation;