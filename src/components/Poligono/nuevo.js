import React, { Component } from 'react';
import store from '../../store'
export default class newPoligono extends Component
{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	poligono:[]
	  };
	}
	render()
	{
	store.subscribe(()=>{
      this.setState({
        poligono: store.getState().dataPoligonos.data
      });
    });
    console.log(this.state.poligono)
	return(
		<div className="row">
            <div className="col-sm-12">
              <input className="form-control" type="text"  value={this.state.poligono} disabled/>
              <br/>
              <input className="form-control" type="text" placeholder="Nombre"/>
              <br/>
              <buttom className="btn btn-secondary">Agregar</buttom>
            </div>
          </div>
          );
	    	
	}
}