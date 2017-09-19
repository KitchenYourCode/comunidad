import React, { Component } from 'react';

export default class Titulo extends Component {
  render(){
    return(
    <h3>{this.props.titulo}</h3>
    );
  }
}