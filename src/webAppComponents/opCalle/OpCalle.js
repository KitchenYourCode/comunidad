import React, { Component } from 'react';
import store from '../../store';
import Titulo from '../Template/titulo';
import User from './User';
import Prioridad from './Prioridad';
import Mandatos from './Mandatos';

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
    console.log("componente desmontado Dashboard");
  }
  render(){
    return(
      <div>
      <Titulo titulo="Operador calle"/>
        <div className="row">
          <div className="col-2">
          
          </div>
            <User/>
        </div>
        <Prioridad/>
        <Mandatos/>
      </div>
    );
  }
}