import React, { Component } from 'react';
import store from '../../store';
import Titulo from '../Template/titulo';
import User from './User';
import Prioridad from './Prioridad';
import Mandatos from './Mandatos';
import { getPerfil } from '../../db';

export default class OpCalle extends Component {
  constructor() {
    super();
    
    this.state = {
    };
    
  }
  componentWillMount(){
    getPerfil(this.props.match.params.id);
    store.subscribe(()=>{
      this.setState({
        nombre:store.getState().dataPerfilCtrlOpCalle.data[0].nombre,
        apellido: store.getState().dataPerfilCtrlOpCalle.data[0].apellido
      });    
  });
}
  render(){
    {console.log(this.state);}
    return(
      <div>
      <Titulo titulo="Operador calle"/>
        <div className="row">
          <div className="col-2">
          
          </div>
            <User nombre={this.state.nombre}/>
        </div>
        <Prioridad/>
        <Mandatos/>
      </div>
    );
  }
}