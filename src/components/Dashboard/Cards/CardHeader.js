import React, { Component } from 'react';

export default class CardHeader extends Component {
  render(){
    return(
        <div className="card-header">
          {this.props.title}
        </div>
    );
  }
}
