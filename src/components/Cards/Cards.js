import React, { Component } from 'react';

import CardHeader from './CardHeader.js';
import CardBlock from './CardBlock.js';
import CardFooter from './CardFooter.js';

export default class Cards extends Component {
  render(){
    return(
      <div className="card" style= {this.props.datos}>
        <CardHeader/>
        <CardBlock/>
        <CardFooter/>
      </div>
    );
  }
}
