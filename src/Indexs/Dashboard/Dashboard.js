import React, { Component } from 'react';

import Header from '../../components/Template/Header/Header.js';
import PanelUsers from '../../components/Template/Users/PanelUsers.js';
import CardGroup from '../../components/Dashboard/Cards/CardGroup.js';
import CardDecks from '../../components/Dashboard/DetailCard/CardDecks.js';

import store from '../../store';
import { Dashboard } from '../../db';

export default class LogIn extends Component {
  constructor() {
    Dashboard();
    super();
    this.state = {
      dataState: []
    };
  }
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        dataState: store.getState().dataDashboardReducer.data
      });
    });
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
          <div className="col-sm-6" >
            <CardGroup datos= { this.state.dataState }/>
          </div>
          <div className="col-sm-4">
            <CardDecks/>
          </div>
        </div>

      </div>
    );
  }
}
