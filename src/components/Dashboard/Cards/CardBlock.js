import React, { Component } from 'react';

import CardMap from './CardMap.js';

export default class CardHeader extends Component {
  render(){
    return(
      <div className="comunidad-card-block">
        <CardMap coordenadas={this.props.coordenadas}/>
      </div>

    );
  }
}
