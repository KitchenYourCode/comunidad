import React, { Component } from 'react';
import CardMap from './CardMap.js';
import store from '../../../store'
export default class Cards extends Component {
  constructor(){
    super();
    this.state = {
      detailCards: []
    }
    store.subscribe(()=>{
      this.setState({
        detailCards: [store.getState().panelDashboardReducer.detailCards]
      })
    })
  }

  render(){

    //console.log(this.state.detailCards);
    if (this.state.detailCards.length !== 0) {
      return(
          <div className="card" style={{"width":"100%", "maxWidth":"100%"}}>
          {this.state.detailCards.map(detailCard =>
            <div key={detailCard.id}>

                <div className="card-header">
                  <h4 className="card-title">{ detailCard.title }</h4>
                </div>
                <div className="card-block">
                  <CardMap coordenadas= { detailCard.coordenadas }/>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Responsable: {detailCard.correo}</small>
                </div>
                <div className="card-footer">
                  <img className="card-img-top" style={{"width":"350px", "maxWidth":"100%"}} alt={detailCard.urlfoto} src={detailCard.urlfoto}/>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{detailCard.descripcion}</small>
                </div>
                <div className="card-footer">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-danger">Alta</button>
                    <button type="button" className="btn btn-warning">Media</button>
                    <button type="button" className="btn btn-success">Baja</button>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Estado: {detailCard.estado}</small>
                </div>
              </div>

          )}
          </div>
      )
    }else {
      return(
        <div className="card" style={{"width":"100%", "maxWidth":"100%"}}>
          <div className="card-header">
            <h4 className="card-title">Sin datos</h4>
          </div>
        </div>
      );
    }

  }
}
