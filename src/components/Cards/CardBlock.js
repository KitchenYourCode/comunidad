import React, { Component } from 'react';

import CardMap from './CardMap.js';

export default class CardHeader extends Component {
  render(){
    return(
      <div className="card-block">
        <CardMap/>
      </div>

    );
  }
}
