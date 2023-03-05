import './Competence.css';

import React, { Component } from 'react';

import imgAngular from '../../images/icons/angular-logo.png';
import imgFirebase from '../../images/icons/firebase.png';
import imgHTLM from '../../images/icons/if_10-html5_104494.png';
import imgBootstrap from '../../images/icons/if_Bootstrap_682700.png';
import imgcss from '../../images/icons/if_icon_287_226925.png';
import imgMySql from '../../images/icons/if_mysql_1322469.png';
import imgnodejs from '../../images/icons/if_node-js_1269842.png';
import imgreact from '../../images/icons/if_react_js_1322468.png';
import imgIonic from '../../images/icons/ionic.png';
import imgNest from '../../images/icons/nestjs.png';

class Competences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3 className="rightSide"> Compétences </h3> <br />
        <div className="row">
          <div className="container col-sm-12 col-md-6">
            <div>
              <h4> Langages et frameworks </h4>
            </div>
            <div className="row col-12">
              <div className="col-sm-12 col-md-6">
                <p className="pFont">
                  <img src={imgHTLM} className="icons" alt="html" /> HTML
                </p>
                <p className="pFont">
                  <img src={imgcss} className="icons" alt="css" /> CSS
                </p>
                <p className="pFont">
                  <img src={imgBootstrap} className="icons" alt="bootstrap" /> Bootstrap
                </p>
                <p className="pFont">
                  <img src={imgnodejs} className="icons" alt="nodejs" /> NodeJS
                </p>
                <p className="pFont">
                  <img src={imgNest} className="icons" alt="javascript" /> NestJS
                </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <p className="pFont">
                  <img src={imgAngular} className="icons" alt="jquery" /> Angular
                </p>
                <p className="pFont">
                  <img src={imgreact} className="icons" alt="react" /> React
                </p>
                <p className="pFont">
                  <img src={imgIonic} className="icons" alt="javascript" /> Ionic
                </p>

                <p className="pFont">
                  <img src={imgMySql} className="icons" alt="mysql" /> MySQL
                </p>
                <p className="pFont">
                  <img src={imgFirebase} className="icons" alt="firebase" /> firebase
                </p>
              </div>
            </div>
          </div>
          <div className="container col-sm-12 col-md-6">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4> Langues </h4>
                <p className="pFont"> Français(langue natale) </p> <br />
                <p className="pFont"> Anglais(oral et écrit) </p> <br />
                <h4> Système d 'exploitation</h4> <p className="pFont"> Microsoft Windows </p>
                <p className="pFont"> Linux Ubuntu </p> <br />
              </div>
              <div className="col-sm-12 col-md-6">
                <h4> Logiciels </h4> <p className="pFont"> Visualcode </p>
                <p className="pFont"> Postman </p>
                <p className="pFont"> Sourcetree </p>
                <p className="pFont"> MySQL workbench </p>
                <p className="pFont"> Microsoft Azure </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Competences;
