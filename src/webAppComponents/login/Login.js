import React, { Component } from 'react';
import firebase from 'firebase';
import { Redirect, withRouter } from 'react-router-dom';
import {getOneData} from '../../db';
export default class Login extends Component {
  constructor(props) {
    super(props);
  getOneData("zona_clientes", "email", "elias.saavedra.lol@gmail.com");
      this.state = {
        login: false,
        type: null
     };
     this.handleAuth = this.handleAuth.bind(this);
  }
  handleAuth(){
    alert("click");
    this.setState({
      login:true,
      type: "CTRL_CALLE"
    })
  }
  render(){
    if (this.state.login && this.state.type === "CTRL_CALLE") {
      return ( <Redirect to="/indexWebApp/CtrlCalle/"/> );
    }
    //if (this.state.login && this.state.type === "CTRL_CALLE") {}
    return(
      <div className="container comunidadLogIn hidden-sm-up">
      <h1>Hola! </h1>
        <div className="row" >
          <div className="col-sm-2 push-2 align-self-center2" >
           <input type="text" name="email" id="email" placeholder="Email"/>
          </div>
        </div>

        <div className="row" >
          <div className="col-sm-2 push-2 align-self-center2" >
           <input type="password" name="password" id="password" placeholder="Password"/>
          </div>
        </div>
          <div className="row" >
          <div className="col-sm-2 push-2 align-self-center" >
           <button className="btn btn-secondary" onClick={this.handleAuth} id="btnLogin">Iniciar sesión</button>
          </div>
        </div>
      </div>
    );
  }
}