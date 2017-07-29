import React, { Component } from 'react';

export default class CardMap extends Component {
  render(){
    let { coordenadas } = this.props;
    const datos = {
      src: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDXwrgz9MVf2wmkjFQWXkmcJ_bTAqJTgTg&q=",
      coordenadas: coordenadas,
      width: 210,
      height: 300,
      frameBorder: 0,
      style: {"border": "0"}
    }
    return(
        <div>
          <iframe src={datos.src + datos.coordenadas} title="hardcoding" width={datos.width} height={datos.height} frameBorder={datos.frameBorder} style={datos.style}></iframe>
        </div>
    );
  }
}
