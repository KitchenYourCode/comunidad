import React, { Component } from 'react';

import CardHeader from './CardHeader.js';
import CardBlock from './CardBlock.js';
import CardFooter from './CardFooter.js';

export default class Cards extends Component {
  render(){
    let datos= this.props.datos;
    return(
      <div className="comunidadCardMain">
        <CardHeader title={ datos.title }/>
        <CardBlock coordenadas={ datos.coordenadas }/>
        <CardFooter datos={datos} id={ datos.id }/>
      </div>
    );
  }
}
