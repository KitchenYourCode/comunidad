import React, { Component } from 'react';

import Header from '../../components/Header/Header.js';
import PanelUsers from '../../components/Users/PanelUsers.js';
import CardGroup from '../../components/Cards/CardGroup.js';
import CardDecks from '../../components/Cards/CardDecks.js';

export default class LogIn extends Component {
  render(){
    return(
      <div>
      <Header />
        <div className="row">
          <div className="col-sm-2">
            <PanelUsers/>
          </div>
          <div className="col-sm-7" >
            <CardGroup />
          </div>
          <div className="col-sm-3">
            <CardDecks />
          </div>
        </div>

      </div>
    );
  }
}
