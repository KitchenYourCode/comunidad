import React, { Component} from 'react';
import firebase from 'firebase';

import Header from '../../components/Template/Header/Header.js';
import PanelUsers from '../../components/Template/Users/PanelUsers.js';
export default class CrearUsuarios extends Component {
  handleAddUser(data){
    let nombre = document.getElementById('nombreUser').value;
    let apellido =document.getElementById('apellidoUser').value;
    let legajo = document.getElementById('legajoUser').value;
    let dni = document.getElementById('dniUser').value;
    let emailName = document.getElementById('emailUser').value;
    let domEmail = document.getElementById('domEmailUser').value;
    let activo = document.getElementById('activoUser').value;
    let rol = document.getElementById('rolUser').value;
    let zona = document.getElementById('zonaUser').value;
    let email = emailName + '@' + domEmail;
    let date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth()+1;
    let anio = date.getFullYear();
    let fecha = anio+'/'+mes+'/'+dia;
    let send = {
      nombre,
      apellido,
      legajo,
      dni,
      email,
      activo,
      rol,
      zona,
      fecha
    };
    firebase.database().ref('zona_clientes').push(send);
    alert('Agregado');
  }
  render(){
    return(
      <div>
        <Header/>
        <div className="row">
          <div className="col-sm-2">
            <PanelUsers/>
          </div>
          <div className="col-sm-10">
              <div className="row">
                <div className="col-sm-9">
                  <div className="form-group row">

                <label  className="col-2 col-form-label">Nombre</label>
                <div className="col-10">
                  <input id="nombreUser" className="form-control" type="text"/>
                </div>
              </div>
              <div className="form-group row">
                <label  className="col-2 col-form-label">Apellido</label>
                <div className="col-10">
                  <input className="form-control" type="text" id="apellidoUser" />
                </div>
              </div>
              <div className="form-group row">
                <label  className="col-2 col-form-label" >Legajo</label>
                <div className="col-10">
                  <input className="form-control" type="text" id="legajoUser"/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-2 col-form-label">DNI</label>
                <div className="col-10">
                  <input className="form-control" type="text" id="dniUser"/>
                </div>
              </div>
              <div className="form-group row">
                <label  className="col-2 col-form-label" >Email</label>
                <div className="col-10">
                  <form className="form-inline">
                    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="emailUser" placeholder=""/>
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div className="input-group-addon">@</div>
                      <input type="text" className="form-control" id="domEmailUser" placeholder=""/>
                    </div>
                  </form>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-2 col-form-label">Activo</label>
                <div className="col-10">
                  <div className="form-group">
                    <select className="form-control" id="activoUser">
                      <option>Si</option>
                      <option>No</option>
                    </select>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Rol</label>
              <div className="col-10">
                <div className="form-group">
                  <select className="form-control" id="rolUser">
                    <option>Admin</option>
                    <option>Empleado web</option>
                    <option>Empleado de caller</option>
                  </select>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2 col-form-label">Zona</label>
            <div className="col-10">
              <div className="form-group">
                <select className="form-control" id="zonaUser">
                  <option>Ejemplo 1</option>
                  <option>Ejemplo 2</option>
                </select>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-success" onClick={this.handleAddUser.bind(this)}>Agregar</button>
                </div>
              </div>
              
        </div>
      </div>
    </div>
    );
  }
}
