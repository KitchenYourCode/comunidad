/* global google */
import React, { Component} from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import DrawingManager from "react-google-maps/lib/drawing/DrawingManager";
import store from '../../store'
class Mapa extends Component {

handleDraw(e){
        let coordenadas = e.overlay.getPath().getArray();
        let poligono = [];
        for (var i = 0; i < coordenadas.length; i++) {

          let lat = coordenadas[i].lat();
          let lng = coordenadas[i].lng();
          poligono.push(lat);
          poligono.push(lng);
        }
           store.dispatch({
            type: "POLIGONO",
            poligono
          })

}
  render(){
    return(
        <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: -32.8897788, lng: -68.8456187}}
        >
         <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.POLYGON}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.POLYGON
            ],
        },polygonOptions: {
            editable: true
          } 
      }}
      onOverlayComplete={this.handleDraw}
    />
      </GoogleMap>
    );
  }
}
export default withGoogleMap(Mapa); 
