import React, { Component } from 'react';
import { getDepartamentos } from '../../db';
import firebase from 'firebase';
import store from '../../store';

export default class newPoligono extends Component
{
	constructor(props) {
	  super(props);
	  getDepartamentos()
	  this.state = {
	  	lat:[],
      lng:[],
	  	departamentos:[]
	  };
	}
	 componentWillMount(){
	 	
	 store.subscribe(()=>{
      this.setState({
        departamentos: store.getState().dataDepartamentos.data
      });
    });
  }
	handleAddPolygon(){
		let nombre = document.getElementById('nombre').value;
		let lat = this.state.lat;
    let lng = this.state.lng;
		let departamento =document.getElementById('departamento').value;
		let send = {nombre,lat,lng,departamento};
		firebase.database().ref('poligonos').push(send);
    	alert('Agregado');
	}
	render()
	{
	let newObj = {};
    let datos = [];
    
    this.state.departamentos.forEach(depa=> {
      for(let i in depa){
        newObj = depa[i];
        datos.push(<option key={newObj}>{newObj}</option>);
      }
    });
	store.subscribe(()=>{
      this.setState({
        lat: store.getState().dataPoligonos.lat,
        lng: store.getState().dataPoligonos.lng
      });
    });
	return(
		<div className="row">
            <div className="col-sm-12">
              <input className="form-control" id="poligono" type="text"  value={this.state.lat+this.state.lng} disabled/>
              <br/>
              <input className="form-control" id="nombre" type="text" placeholder="Nombre"/>
              <br/>
                  <select className="form-control" id="departamento" >
                  {datos}
                  </select>
                  <br/>
              <button className="btn btn-secondary" onClick={this.handleAddPolygon.bind(this)}>Agregar</button>
            </div>
          </div>
          );
	    	
	}
}