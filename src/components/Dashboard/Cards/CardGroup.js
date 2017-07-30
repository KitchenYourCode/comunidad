import React, { Component } from 'react';

import Cards from './Cards.js';

export default class CardGroup extends Component {
  render(){
    let datos = this.props.datos;
    let row = [];
    datos.forEach(dato=>{
      row.push(<Cards  datos={ dato } key={ dato.id }/>);
    });
    if (datos.length !== 0) {
      return(
        <div className="card-group" >
          { row }
        </div>);
    }else{
    return(<h1>Sin datos</h1>);
    }
  }
}
