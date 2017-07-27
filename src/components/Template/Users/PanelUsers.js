import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
export default class PanelUsers extends Component {
  render(){
    return(
<div className="panel">
    <div className="row align-items-center">
      <div className="col align-self-center text-center comunidadPanelUsers">
        <img src="http://img.freepik.com/iconos-gratis/simbolo-de-usuario-negro-macho_318-60703.jpg?size=338&ext=jpg" alt="User-img" className="rounded-circle comunidadPanelUsers-img" />
        <p id="user">Usuario</p>
      </div>
      <div className="col align-self-center text-center comunidadPanelUsers">
        <ul className="list-group">
         <li className="list-group-item"><Link to="/">Home</Link></li>
         <li className="list-group-item"><Link to="/Dashboard">Dashboard</Link></li>
         <li className="list-group-item"><Link to="/CrearUsuarios">CrearUsuarios</Link></li>
         <li className="list-group-item"><Link to="/CrearPoligonos">CrearPoligonos</Link></li>
       </ul>
   </div>
    </div>
</div>
    );
  }
}
