import React, { Component } from 'react';

export default class CardHeader extends Component {
  render(){
    return(
        <div className="card-footer text-muted">
          <label>Responsable: {this.props.responsable}</label>
          <br/>
          <button type="button" className="btn btn-secondary btn-sm">Ver</button>
        </div>
    );
  }
}
