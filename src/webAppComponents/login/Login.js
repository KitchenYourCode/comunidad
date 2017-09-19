import React, { Component } from 'react';
import firebase from 'firebase';
import { Redirect, withRouter } from 'react-router-dom';
import { getLogginCrtlOpCalle } from '../../db';
import store from '../../store';
export default class Login extends Component {
  constructor(props) {
    super(props);
  
      this.state = {
        id: null,
        rol: null
     };
     this.handleAuth = this.handleAuth.bind(this);
  }
    getValue(Obj){
    let newObj = {};
    for( let i in Obj ){
      newObj = Obj[i];
    }
    return newObj;
  }
  handleAuth(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    getLogginCrtlOpCalle("zona_clientes", "email", email, password);
    alert("click");
       store.subscribe(()=>{
        this.setState({
          id:store.getState().dataLoginCtrlOpCalle.data[0].id,
          rol:store.getState().dataLoginCtrlOpCalle.data[0].rol
        })
    });
  }
  render(){
    console.log(this.state.rol)

      if (this.state.rol === "Operador Calle") {
        return ( <Redirect to={"/indexWebApp/OpCalle/"+this.state.id}/> );
      }
      if (this.state.rol === "Controlador Calle") {
        return ( <Redirect to={"/indexWebApp/CtrlCalle/"+this.state.id}/> );
      }
      //return ( <Redirect to="/indexWebApp/CtrlCalle/"/> );
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