import React, { Component } from 'react';

import Header from '../../components/Template/Header/Header.js';
import PanelUsers from '../../components/Template/Users/PanelUsers.js';
import CardGroup from '../../components/Dashboard/Cards/CardGroup.js';
import CardDecks from '../../components/Dashboard/DetailCard/CardDecks.js';

export default class LogIn extends Component {
  render(){
    return(
      <div>
      <Header />
        <div className="row">
          <div className="col-sm-2">
            <PanelUsers/>
          </div>
          <div className="col-sm-6" >
            <CardGroup />
          </div>
          <div className="col-sm-4">
            <CardDecks />
          </div>
        </div>

      </div>
    );
  }
}
