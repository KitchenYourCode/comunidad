import React, { Component} from 'react';

import Header from '../../components/Template/Header/Header.js';
import PanelUsers from '../../components/Template/Users/PanelUsers.js';

export default class CrearUsuarios extends Component {
  constructor(props){
    super(props);
    this.state = {
      nuevo: ''
    }
  }
  addPanel(){
    this.setState({
      nuevo:        <div className="row">
                    <div className="col-sm-12">
                      <input className="form-control" type="text" placeholder="Coordenadas"/>
                      <br/>
                      <input className="form-control" type="text" placeholder="Nombre"/>
                      <br/>
                      <buttom className="btn btn-secondary">Agregar</buttom>
                    </div>
                  </div>
    });
  }
  render(){
    return(
      <div>
        <Header/>
        <div className="row">
          <div className="col-sm-2">
            <PanelUsers/>
          </div>
          <div className="col-sm-6">
            <iframe width="650" title="hardcoding" height="500" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDXwrgz9MVf2wmkjFQWXkmcJ_bTAqJTgTg&q=-32.8833303,-68.8935387"/>
          </div>
          <div className="col-sm-4">
            <buttom onClick={()=>{this.addPanel()}}className="btn btn-secondary">Nuevo</buttom>
            <buttom className="btn btn-secondary">Eliminar</buttom>
            <buttom className="btn btn-secondary">Editar</buttom>
            <buttom className="btn btn-secondary">renombrar</buttom>
            <table className="table">
              <tr>
                <td>[-32.8833303,-68.8935387]
                  <br/>
                  <label>Lavalle Centro</label>
                </td>

                <td><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>[-32.8833303,-68.8935387]
                  <br/>
                  <label>Costa Araujo</label>
                </td>

                <td><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>[-32.8833303,-68.8935387]
                  <br/>
                  <label>Gustavo Andres</label>
                </td>
                <td><input type="checkbox"/></td>
              </tr>
            </table>
            {this.state.nuevo}
          </div>
        </div>
      </div>
    );
  }
}
