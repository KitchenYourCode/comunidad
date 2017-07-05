import React, { Component } from 'react';

import CardHeader from './CardHeader.js';
import CardBlock from './CardBlock.js';
import CardFooter from './CardFooter.js';

export default class Cards extends Component {
  render(){

    return(
      <div className="comunidadCardMain">
        <CardHeader title="titulo222"/>
        <CardBlock coordenadas="-32.8833303,-68.8935387"/>
        <CardFooter />
      </div>
    );
  }
}
