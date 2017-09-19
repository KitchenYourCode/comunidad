import React, { Component } from 'react';

export default class User extends Component {
  constructor() {
    //Dashboard();
    super();
    this.state = {
    };
  }

  render(){
    return(
      <div>
      <div className="row">
		<div className="push-3 col-3 col-auto">img</div>
	</div>
      <div className="row">
      	<div className="push-3 col-3">{this.props.nombre}</div>
      </div>
      <div className="row">
      	<div className="push-3 col-3">asignacion</div>
      </div>
      </div>
    );
  }
}