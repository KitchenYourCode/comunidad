import React, { Component } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
export default class Login extends Component {
  constructor(props) {
    super(props);
  
      this.state = {
     };
     this.handleAuth = this.handleAuth.bind(this);
  }
  handleAuth(){
    alert("click");
  }
  render(){

    return(
      <div className="container comunidadLogIn hidden-sm-up">
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