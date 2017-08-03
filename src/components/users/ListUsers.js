import React, { Component } from 'react';

export default class ListUsers extends Component {
  getValue(Obj){
    let newObj = {};
    for( let i in Obj ){
      newObj = Obj[i];
    }
    return newObj;
  }
  render(){ 
  	return(
  	<tbody>
  		<tr>
	      <td>{this.props.datos.nombre}</td>
	      <td>{this.props.datos.apellido}</td>
	      <td>nombre</td>
	      <td>{this.props.datos.fecha}</td>
	    </tr>
	   </tbody>
		  )
  }
}
