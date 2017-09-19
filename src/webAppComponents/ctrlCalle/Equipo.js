import React, { Component } from 'react';

export default class Equipo extends Component {
	constructor(props) {
	super(props);
}
  render(){
    return(
    <div className="row" >
      <div className="col-sm-3">user<label>20 Asignaciones</label></div>
      <div className="col-sm-3">Nombre poligono</div>
      <div className="col-sm-3">Nombre poligono</div>
      <div className="col-sm-3">Nombre poligono</div>
    </div>
    );
  }
}