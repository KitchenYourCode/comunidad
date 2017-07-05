import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <nav className="navbar navbar-light comunidadHeader" >
    	<div className="row">
    		<div className="col col-sm-1">
    			<a className="navbar-brand" >Logo</a>
    		</div>
    		<div className="col-sm-3 push-4">
    			<a className="navbar-brand" >Municipalidad de lavalle</a>
    		</div>
    	</div>
    </nav>
    );
  }
}
