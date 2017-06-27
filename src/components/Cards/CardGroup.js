import React, { Component } from 'react';

import Cards from './Cards.js';

export default class CardGroup extends Component {

  render(){
    return(
        <div className="card-group" style={{"padding": "0", "margin": "0"}}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
    );
  }
}
