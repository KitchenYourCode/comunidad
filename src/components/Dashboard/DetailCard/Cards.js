import React, { Component } from 'react';
import CardMap from './CardMap.js';
export default class Cards extends Component {
  render(){

    return(
      <div className="card" style={{"width":"100%", "max-width":"100%"}}>
        <div className="card-header">
          <h4 className="card-title">Card title</h4>
        </div>
        <div className="card-block">
          <CardMap/>
        </div>
        <div className="card-footer">
          <small className="text-muted">Responsable: Elias</small>
        </div>
        <div className="card-footer">
          <img className="card-img-top" style={{"width":"350px", "max-width":"100%"}} src="https://cdn.pixabay.com/photo/2015/09/05/21/12/rural-925374_960_720.jpg"/>
        </div>
        <div className="card-footer">
          <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small>
        </div>
        <div className="card-footer">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-danger">Alta</button>
            <button type="button" className="btn btn-warning">Media</button>
            <button type="button" className="btn btn-success">Baja</button>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">Estado</small>
        </div>
      </div>
    );
  }
}
