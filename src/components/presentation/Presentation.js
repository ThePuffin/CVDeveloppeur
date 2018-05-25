import React, { Component } from 'react';

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rue: "3 boulevard Eugène Reguillon",
            ville: "69100 VILLEURBANNE",
            tel : "07.81.53.05.38",
            mail: "ballutvincent@gmail.com",
            github: "ThePuffin",
            twitter: "Vincent_Ballut",
            vehicule: "vehicule personnel",
            situation :"Celibataire"
         };
    }
    render() {
        return <div>
            <p>{this.state.rue}</p>
            <p>{this.state.ville}</p>

            <p>{this.state.tel}</p>

            <p>mail : {this.state.mail}</p>
            <p>GITHUB : {this.state.github}</p>
            <p>Twitter: {this.state.twitter}</p>
           <p>{this.state.vehicule}</p>
          </div>;
    }
}

export default Presentation;