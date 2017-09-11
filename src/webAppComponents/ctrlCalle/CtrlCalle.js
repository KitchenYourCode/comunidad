import React, { Component } from 'react';

import Titulo from '../Template/titulo'
import Categorias from './Categorias';
import Asignacion from './Asignacion';
import Equipo from './Equipo';
import store from '../../store';
//import { Dashboard } from '../../db';

export default class CtrlCalle extends Component {
  constructor() {
    //Dashboard();
    super();
    this.state = {
    };
  }
  componentDidMount(){
   /* store.subscribe(()=>{
      this.setState({
        dataState: store.getState().dataDashboardReducer.data
      });
    });*/
  }
  componentWillUnmount(){
  }
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-sm-12">
          <Titulo titulo="Sitema de control de calle"/>
          </div>
        </div>
            <Categorias/>
          
            <Asignacion/>
          <Equipo/>
      </div>
    );
  }
}