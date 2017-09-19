import React, { Component } from 'react';

export default class Prioridad extends Component {
  render(){
    return(
    <div className="btn-group" role="group" aria-label="Basic example">
	  <button type="button" className="btn btn-secondary">Left</button>
	  <button type="button" className="btn btn-secondary">Middle</button>
	  <button type="button" className="btn btn-secondary">Right</button>
	</div>
    );
  }
}