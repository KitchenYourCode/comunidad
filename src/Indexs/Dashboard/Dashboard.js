import React, { Component } from 'react';

import Header from '../../components/Template/Header/Header.js';
import PanelUsers from '../../components/Template/Users/PanelUsers.js';
import CardGroup from '../../components/Dashboard/Cards/CardGroup.js';
import CardDecks from '../../components/Dashboard/DetailCard/CardDecks.js';

import db, { Dashboard } from '../../db';
export default class LogIn extends Component {
  render(){
    Dashboard();
    return(
      <div>
      <Header />
        <div className="row">
          <div className="col-sm-2">
            <PanelUsers/>
          </div>
          <div className="col-sm-6" >
            <CardGroup datos= { db }/>
          </div>
          <div className="col-sm-4">
            <CardDecks datos= { db }/>
          </div>
        </div>

      </div>
    );
  }
}
