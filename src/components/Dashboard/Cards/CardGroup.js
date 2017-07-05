import React, { Component } from 'react';

import Cards from './Cards.js';

export default class CardGroup extends Component {
//style={{"padding": "0", "margin": "0"}}
  render(){
    let row = [];
    let datos = [
      {id: 1, titulo: "titulo1",coordenadas: "-32.8833303,-68.8935387",responsable: "Elias"},
      {id: 2, titulo: "titulo2",coordenadas: "-32.8833303,-68.8935387",responsable: "Sergio"},
      {id: 3, titulo: "titulo2",coordenadas: "-32.8833303,-68.8935387",responsable: "Saavedra"}
    ];
    datos.forEach((dato)=>{
      row.push(<Cards  datos={datos} key={dato.id}/>);
    });
    return(
        <div className="card-group" >
          { row }
        </div>
    );
  }
}
