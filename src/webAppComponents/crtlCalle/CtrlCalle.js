import React, { Component } from 'react';

import Header from '../../components/Template/Header/Header.js';
import PanelUsers from '../../components/Template/Users/PanelUsers.js';

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
    console.log("componente desmontado Dashboard");
  }
  render(){
    return(
      <div>
      <Header />
        <div className="row">
          <div className="col-sm-2">
            <PanelUsers/>
          </div>
          <div className="col-sm-10" >
            <h1>Sin datos</h1>
          </div>
        </div>

      </div>
    );
  }
}