import React, { Component } from 'react';

export default class PanelUsers extends Component {
  render(){
    return(
<div className="panel">
    <div className="row align-items-center">
      <div className="col align-self-center text-center comunidadPanelUsers">
        <img src="http://img.freepik.com/iconos-gratis/simbolo-de-usuario-negro-macho_318-60703.jpg?size=338&ext=jpg" className="rounded-circle comunidadPanelUsers-img" />
        <p id="user">Usuario</p>
      </div>
    </div>
</div>
    );
  }
}
