import React, { Component } from 'react';

import Cards from './Cards.js';

export default class CardGroup extends Component {
//style={{"padding": "0", "margin": "0"}}
  render(){
    let row = [];
    this.props.datos.forEach((dato)=>{
      row.push(<Cards  datos={ dato } key={ dato.id }/>);
    });
    return(
        <div className="card-group" >
          { row }
        </div>
    );
  }
}
