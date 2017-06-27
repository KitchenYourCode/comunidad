import React, { Component } from 'react';

export default class CardMap extends Component {
  render(){

    const datos = {
      src: "https://www.google.com/maps/embed/v1/place?key=AIzaSyDXwrgz9MVf2wmkjFQWXkmcJ_bTAqJTgTg&q=-32.8833303,-68.8935387",
      width: 218,
      height: 300,
      frameborder: 0,
      style: {"border": "0"}
    }
    return(
        <div>
          <iframe src={datos.src} width={datos.width} height={datos.height} frameborder={datos.frameborder} style={datos.style}></iframe>
        </div>
    );
  }
}
