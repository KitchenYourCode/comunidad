import React, { Component } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
export default class LogIn extends Component {
  constructor(props) {
    super(props);
  
      this.state = {
       loggedIn : false
     };
  }

  handleAuth(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let auth = firebase.auth();
    let promise = auth.signInWithEmailAndPassword(email, password);
    promise.then(result=>{
      
    });
    promise.catch(error=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
    });
  }
componentDidMount(){
      firebase.auth().onAuthStateChanged(firebaseUser =>{
      console.log(firebaseUser.email);
      if (firebaseUser.email) {
        this.setState({
          loggedIn: true
        });
      }
      else{
        alert("No logeado");
      }
    });
}
 componentWillUnmount(){
    console.log("componente desmontado Login");
  }
  render(){
    if (this.state.loggedIn) {
      return ( <Redirect to="/Dashboard"/> );
    }
    return(
      <div className="container comunidadLogIn">
        <div className="row" >
          <div className="col-sm-2 push-5 align-self-center" >
           <input type="text" name="email" id="email" placeholder="Email"/>
          </div>
        </div>

        <div className="row" >
          <div className="col-sm-2 push-5 align-self-center" >
           <input type="password" name="password" id="password" placeholder="Password"/>
          </div>
        </div>
          <div className="row" >
          <div className="col-sm-2 push-5 align-self-center" >
           <button className="btn btn-secondary" onClick={this.handleAuth} id="btnLogin">Iniciar sesión</button>
          </div>
        </div>
      </div>
    );
  }
}
