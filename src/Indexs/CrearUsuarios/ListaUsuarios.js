import React, { Component} from 'react';

export default class listaUsuarios extends Component {
	render(){
		return(
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
		);
	}
}