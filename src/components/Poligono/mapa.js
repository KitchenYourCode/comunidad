/* global google */
import React, { Component} from 'react';
import { withGoogleMap, GoogleMap, Polygon } from "react-google-maps";
import DrawingManager from "react-google-maps/lib/drawing/DrawingManager";
import store from '../../store';
import {getPolygons} from '../../db';

class Mapa extends Component {
  constructor(props) {
    super(props);
    getPolygons();
    this.state = {
      Polygon: {},
      mover: false,
      agarrar: false,
      options: true,
      DrawingMode:google.maps.drawing.OverlayType.POLYGON,
      allPolygons:[],
      setPolygon:[]
    }

 
  }
  componentWillMount(){
    store.subscribe(()=>{
      this.setState({
        allPolygons: store.getState().dataAllPolygonsDraws.data
      });
    })
  }
setCoordenadas(){
  let e = this.state.Polygon.e;
  let coordenadas = e.getPath().getArray();
  let lat = [];
  let lng = [];
  for (var i = 0; i < coordenadas.length; i++) {
    let lati = coordenadas[i].lat();
    let lngi = coordenadas[i].lng();
    lat.push(lati);
    lng.push(lngi);
  }
    store.dispatch({
    type: "POLIGONO",
    lat,
    lng
  });
  //console.log(this.state.overlay.e)
}
getCoordenadas(){
  this.setState({Polygon:{e:this.state.Polygon.e}});
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
handleOptions(){
 return this.state.options;
}

  setPolygons(){
    let row =[];
    if (this.state.allPolygons) {
      for (var i = this.state.allPolygons.length - 1; i >= 0; i--) {
      console.log(this.state.allPolygons[i]);
      let polygonLatLng = [];
        for (var e = this.state.allPolygons[i].lat.length - 1; e >= 0; e--) {
          polygonLatLng.push({lat:this.state.allPolygons[i].lat[e], lng:this.state.allPolygons[i].lng[e]});
        }
      row.push(<Polygon key={this.state.allPolygons[i].id}  path={polygonLatLng} />);
      }     
    }
  return row;
  }
  render(){
    return(
        <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: -32.8897788, lng: -68.8456187}}
        >
        {this.setPolygons()}
         <DrawingManager
      drawingMode={this.state.DrawingMode}
      options={{
        drawingControl: this.state.options,
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

      //options={{drawingControl:this.state.options}}

      //onPolygonComplete={(e)=>{if(this.state.poligonoClean){this.setState({Polygon:{e},poligonoClean: false}); }else{console.log(e.setMap(null)); } } }
      onPolygonComplete={
      (e)=>{
      this.setState({Polygon:{e},poligonoClean: false, options:false, DrawingMode:null});
      this.getCoordenadas();
      //google.maps.event.addListener(e.getPath(), 'set_at', this.getCoordenadas.bind(this));
      //google.maps.event.addListener(e.getPath(), 'insert_at', ()=> {console.log('Vertex insert on outer path.');});
      //<button onClick={()=>{this.getMover()}}  disabled={this.state.mover}>Mover</button>
  }
}
    />
      
      <button onClick={()=>{this.getEditar()}} disabled={this.state.agarrar}>Editar</button>
      <button onClick={()=>{this.setCoordenadas()}}  disabled={this.state.mover || this.state.agarrar}>Agregar</button>
      </GoogleMap>
    );
  }
}
export default withGoogleMap(Mapa); 
