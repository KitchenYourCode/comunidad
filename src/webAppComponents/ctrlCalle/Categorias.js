import React, { Component } from 'react';
import firebase from 'firebase';

import store from '../../store';
import { getCategorias } from '../../db';

export default class Categorias extends Component {
	constructor(props) {
	super(props);
	getCategorias();
	this.state = {
		categorias:[]
	}
	store.subscribe(()=>{
      this.setState({
      	categorias: store.getState().dataCategorias.data
      });
    });
}

  render(){
  	let newObj = {};
    let datos = [];
    
    this.state.categorias.forEach(cate=> {
    	if (cate.activa) {
        datos.push(
        	<div className="row" key={cate.descripcion}>
        	<div className="col-sm-5"><button className="">{cate.descripcion}</button></div>
        	<div className="col-sm-2">
            Asig.:200
          </div>
          <div className="col-sm-2">
            S/Asig.: 12
          </div>
          <div className="col-sm-2">
            Total: 220
          </div>
        </div>
        );
	    }	
    })
     return(
    <div id="departamento" >
    {datos}
    </div>
    );
  }
}