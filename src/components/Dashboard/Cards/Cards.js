import React, { Component } from 'react';

import CardHeader from './CardHeader.js';
import CardBlock from './CardBlock.js';
import CardFooter from './CardFooter.js';

export default class Cards extends Component {
  getValue(Obj){
    let newObj = {};
    for( let i in Obj ){
      newObj = Obj[i];
    }
    return newObj;
  }
  render(){
    let datos= this.props.datos;
    let emisorObj = Object.assign({},datos.emisor);
    let reclamoObj = Object.assign({},datos.reclamo);
    let correo = this.getValue(emisorObj).correo;
    let coordenadas = this.getValue(reclamoObj).coordenadas;
    return(
      <div className="comunidadCardMain">
        <CardHeader title={ datos.id }/>
        <CardBlock coordenadas={ coordenadas }/>
        <CardFooter datos={ datos } correo={ correo } id={ datos.id }/>
      </div>
    );
  }
}
