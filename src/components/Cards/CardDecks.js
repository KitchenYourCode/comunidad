import React, { Component } from 'react';

import Cards from './Cards.js';

export default class CardDecks extends Component {
  render(){
    const datos = {
      "width": "100%",
      "max-width": "100%"
    }
    return(
        <div className="card-decks">
          <Cards datos={datos}/>
        </div>
    );
  }
}
