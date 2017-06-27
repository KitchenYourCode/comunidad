import React, { Component } from 'react';

export default class LogIn extends Component {
  render(){
    return(
      <div className="container comunidadLogIn">
        <div className="row" >
          <div className="col-sm-2 push-5 align-self-center" >
           <input type="text" name="email" id="email" placeholder="Email"/>
          </div>
        </div>

        <div class="row" >
          <div className="col-sm-2 push-5 align-self-center" >
           <input type="password" name="password" id="password" placeholder="Password"/>
          </div>
        </div>
          <div className="row" >
          <div className="col-sm-2 push-5 align-self-center" >
           <button className="btn btn-secondary" id="btnLogin">Iniciar sesión</button>
          </div>
        </div>
      </div>
    );
  }
}
