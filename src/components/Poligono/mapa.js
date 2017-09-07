/* global google */
import React, { Component} from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import DrawingManager from "react-google-maps/lib/drawing/DrawingManager";
import store from '../../store';

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Polygon: {},
      poligonoClean: true,
      mover: false,
      agarrar: false
    }
  }
getCoordenadas(){
  let e = this.state.Polygon.e;
  let coordenadas = e.getPath().getArray();
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
  });
  //console.log(this.state.overlay.e)
}
getMover(){
  let e =this.state.Polygon.e;
  e.setDraggable(!e.getDraggable());
  google.maps.event.addListener(e, 'dragend', this.getCoordenadas.bind(this) ) ;
  this.setState({agarrar : !this.state.agarrar});
  
}
getEditar(){
  let e =this.state.Polygon.e;
  e.setEditable(!e.getEditable());
  google.maps.event.addListener(e.getPath(), 'set_at', this.getCoordenadas.bind(this));
  google.maps.event.addListener(e.getPath(), 'insert_at', this.getCoordenadas.bind(this));
  this.setState({mover : !this.state.mover})
  
}

  render(){
    return(
        <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: -32.8897788, lng: -68.8456187}}
        >
         <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType}
      options={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.POLYGON
            ],
        },polygonOptions: {
            editable: false,
            draggable: false,
          } 
      }}
      

      //onPolygonComplete={(e)=>{if(this.state.poligonoClean){this.setState({Polygon:{e},poligonoClean: false}); }else{console.log(e.setMap(null)); } } }
      onPolygonComplete={
      (e)=>{

        if (!this.state.poligonoClean) {e.setMap(null)}
      this.setState({Polygon:{e},poligonoClean: false});
      this.getCoordenadas();
      //google.maps.event.addListener(e.getPath(), 'set_at', this.getCoordenadas.bind(this));
      //google.maps.event.addListener(e.getPath(), 'insert_at', ()=> {console.log('Vertex insert on outer path.');});
  }
}
    />
      <button onClick={()=>{this.getMover()}}  disabled={this.state.mover}>Mover</button>
      <button onClick={()=>{this.getEditar()}} disabled={this.state.agarrar}>editar</button>
      </GoogleMap>
    );
  }
}
export default withGoogleMap(Mapa); 
