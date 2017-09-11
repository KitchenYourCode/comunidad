import React, { Component } from 'react';

export default class Asignacion extends Component {
	constructor(props) {
	super(props);
}
  render(){
    return(
    <div className="row" >
      <div className="col-sm-4">Nombre poligono</div>
      <div className="col-sm-1">prioridad (alta media baja)</div>
      <div className="col-sm-2">estado</div>
      <div className="col-sm-1">fecha</div>
      <div className="col-sm-1"><button>toggle</button></div>
      <div className="col-sm-3">User</div>
    </div>
    );
  }
}