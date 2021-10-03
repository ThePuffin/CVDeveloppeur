import './Competence.css';

import React, { Component } from 'react';

import imgAngular from './icons/angular-logo.png';
import imgHTLM from './icons/if_10-html5_104494.png';
import imgBootstrap from './icons/if_Bootstrap_682700.png';
import imgcss from './icons/if_icon_287_226925.png';
import imgMySql from './icons/if_mysql_1322469.png';
import imgnodejs from './icons/if_node-js_1269842.png';
import imgreact from './icons/if_react_js_1322468.png';
import imgNest from './icons/nestjs.png';

// import imgsass from "./icons/if_sass_icon_291782.png";
class Competences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3 className="droite"> Compétences </h3> <br />
        <div className="row">
          <div className="container col-sm-12 col-md-6">
            <div>
              <h4> Langages et frameworks </h4>{' '}
            </div>{' '}
            <div className="row col-12">
              <div className="col-sm-12 col-md-6">
                <p className="pFont">
                  <img src={imgHTLM} className="icons" alt="html" /> HTML 5{' '}
                </p>{' '}
                <p className="pFont">
                  <img src={imgcss} className="icons" alt="css" /> CSS 3{' '}
                </p>{' '}
                {/* <p className="pFont">
                      <img src={imgsass} className="icons" alt="sass" /> SASS
                    </p> */}{' '}
                <p className="pFont">
                  <img src={imgnodejs} className="icons" alt="nodejs" /> NodeJS{' '}
                </p>{' '}
                <p className="pFont">
                  <img src={imgNest} className="icons" alt="javascript" /> NestJS{' '}
                </p>{' '}
              </div>{' '}
              <div className="col-sm-12 col-md-6">
                <p className="pFont">
                  <img src={imgAngular} className="icons" alt="jquery" /> Angular{' '}
                </p>
                <p className="pFont">
                  <img src={imgreact} className="icons" alt="react" /> React{' '}
                </p>
                <p className="pFont">
                  <img src={imgBootstrap} className="icons" alt="bootstrap" /> Bootstrap 4{' '}
                </p>
                <p className="pFont">
                  {' '}
                  <img src={imgMySql} className="icons" alt="mysql" /> MySQL{' '}
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className="container col-sm-12 col-md-6">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4> Langues </h4> <p className="pFont"> Anglais(oral et écrit) </p> <br />
                <h4> Système d 'exploitation</h4> <p className="pFont"> Microsoft Windows </p>{' '}
                <p className="pFont"> Linux Ubuntu </p> <br />
              </div>{' '}
              <div className="col-sm-12 col-md-6">
                <h4> Logiciels </h4> <p className="pFont"> Visualcode </p> <p className="pFont"> GitHub </p>{' '}
                <p className="pFont"> Pack Microsoft Office 2016 </p> <p className="pFont"> AutoCAD </p>{' '}
                <p className="pFont"> Talren </p> {/* <p className="pFont">Geolog</p> */}{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>
    );
  }
}

export default Competences;
