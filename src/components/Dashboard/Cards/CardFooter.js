import React, { Component } from 'react';
import store from '../../../store'

export default class CardHeader extends Component {
  handleButton(detailCards){
    store.dispatch({
      type: "VIEW_PANEL_RIGHT",
      detailCards
    })
  }
  render(){

    return(
        <div className="card-footer text-muted">
          <label>Responsable: {this.props.correo}</label>
          <br/>
          <button type="button" className="btn btn-secondary btn-sm" onClick={()=>{this.handleButton(this.props.datos)}}>Ver</button>
        </div>
    );
  }
}
