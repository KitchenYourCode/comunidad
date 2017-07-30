import React, { Component} from 'react';

import Header from '../../components/Template/Header/Header.js';
import PanelUsers from '../../components/Template/Users/PanelUsers.js';

export default class Usuarios extends Component {
	render(){
		return(
        <div>
        <Header/>
        <div className="row">
          <div className="col-sm-2">
          <PanelUsers/>
          </div>
          <div className="col-sm-10">
          <button type="button" className="btn btn-secondary">Eliminar</button>
          <button type="button" className="btn btn-secondary">Editar</button>
    <table className="table">
          <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td><input type="checkbox"/></td>
            <td>AAAA/MM/DD</td>
          </tr>
          <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td><input type="checkbox"/></td>
            <td>AAAA/MM/DD</td>
          </tr>
          <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td><input type="checkbox"/></td>
            <td>AAAA/MM/DD</td>
          </tr>
        </table>
          </div>
        </div>
      </div>
		);
	}
}