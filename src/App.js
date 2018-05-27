import React, { Component } from "react";
import "./App.css";
import Presentation from "./components/presentation/Presentation";
import Parcours from "./components/parcours/Parcours";
import Competences from "./components/competences/Competences";
import Interets from "./components/interets/Interets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "BALLUT",
      prenom: "Vincent",
      poste: "Developpeur WEB JavaScript"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="row">
        <div className="container">
        <img src="https://media.licdn.com/dms/image/C5603AQHsaD85_sHIOA/profile-displayphoto-shrink_200_200/0?e=1533168000&v=beta&t=rYIDZU0nlnqJSRtIcB5TOVO5insys-ErATt3lj1aQYI" alt="photo de CV"/>
        </div>
        <div className="container">
          <h1 className="App-title">{this.state.nom} {this.state.prenom}</h1>
          <h3>{this.state.poste}</h3>
          <h5>Disponible à partir de mi-août 2018</h5>
        </div>
        </div>
        </header>
        <Presentation />
        <hr />
        <Parcours />
        <hr />
        <Competences />
        <hr />
        <Interets />
      </div>
    );
  }
}

export default App;
