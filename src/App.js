import React, { Component } from "react";
import "./App.css";
import Presentation from "./components/presentation/Presentation";
import Parcours from "./components/parcours/Parcours";
import Competences from "./components/competences/Competences";
import Interets from "./components/interets/Interets";
import Formation from "./components/formation/Formation";
import Projets from "./components/projets/Projets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Presentation />
        </header>
        <div>
          <br />
          <Formation />
          <hr />
          <Competences />
          <hr />
          <Parcours />
          <hr />
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <Projets />
            </div>
            <div className="col-sm-12 col-md-4">
              <Interets />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
