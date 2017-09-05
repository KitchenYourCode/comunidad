/* global google */
import React, { Component} from 'react';
import { withGoogleMap, GoogleMap,Rectangle } from "react-google-maps";
import DrawingManager from "react-google-maps/lib/drawing/DrawingManager";
import store from '../../store';

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: {},
      poligonoClean: true
    }
  }
getCoordenadas(){
  let e = this.state.overlay.e;
  let coordenadas = e.overlay.getPath().getArray();
  let poligono = [];
  for (var i = 0; i < coordenadas.length; i++) {

    let lat = coordenadas[i].lat();
    let lng = coordenadas[i].lng();
    poligono.push(lat);
    poligono.push(lng);
  }
  console.log(poligono)
    store.dispatch({
    type: "POLIGONO",
    poligono
  });
  //console.log(this.state.overlay.e)
}
  render(){
    console.log(this.state.poligonoClean  )
    return(
        <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: -32.8897788, lng: -68.8456187}}
        >
         <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.POLYGON
            ],
        },polygonOptions: {
            editable: true,
            draggable: true,
          } 
      }}
      onOverlayComplete={(e)=>{if(this.state.poligonoClean){this.setState({overlay:{e},poligonoClean: false});}else{console.log(e.overlay.setMap(null)); } } }
    /> 
      <button onClick={()=>{this.getCoordenadas();}}>generar</button>
      </GoogleMap>
    );
  }
}
export default withGoogleMap(Mapa); 
