import React, { Component } from 'react';

import ListUsers from './ListUsers';

export default class Users extends Component {
  render(){
    let datos = this.props.datos;
    let row = [];
    datos.forEach(dato=>{
      row.push(<ListUsers datos = { dato } key={dato.key}/>);
    });
    if (datos.length !== 0) {
      return(
        <div>
        <table className="table">
		  <thead>
		    <tr>
		      <th>First Name</th>
		      <th>Last Name</th>
		      <th>Username</th>
		      <th>Fecha</th>
		    </tr>
		  </thead>
		  { row }
	
		</table>
          
        </div>);
    }else{
    return(<h1>Sin datos</h1>);
    }
  }
}