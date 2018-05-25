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
          <h1 className="App-title">{this.state.nom} {this.state.prenom}</h1>
          <h3>{this.state.poste}</h3>
          {/* <h5>HTML, CSS, Bootstrap, Javascript, NodeJS, REACT</h5> */}
        </header>
        <Presentation />
        <Parcours />
        <Competences />
        <Interets />
      </div>
    );
  }
}

export default App;
