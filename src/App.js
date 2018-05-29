import React, { Component } from "react";
import "./App.css";
import Presentation from "./components/presentation/Presentation";
import Parcours from "./components/parcours/Parcours";
import Competences from "./components/competences/Competences";
import Interets from "./components/interets/Interets";
import Formation from "./components/formation/Formation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "BALLUT",
      prenom: "Vincent",
      poste: "Développeur WEB junior"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            {this.state.nom} {this.state.prenom}
          </h1>

          <h2>{this.state.poste}</h2>

          <Presentation />
        </header>
        <div>
        <br/>
          <Parcours />
          <hr />
          <Formation />
          <hr />
          <Competences />
          <hr />
          <Interets />
        </div>
      </div>
    );
  }
}

export default App;
