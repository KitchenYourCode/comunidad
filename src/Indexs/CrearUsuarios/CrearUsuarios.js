import React, { Component} from 'react';

import Header from '../../components/Template/Header/Header.js';
import PanelUsers from '../../components/Template/Users/PanelUsers.js';
import Nuevo from './Nuevo.js';
import ListaUsuario from './ListaUsuarios.js';
export default class CrearUsuarios extends Component {
  constructor(props){
    super(props);
    this.state = {
      nuevo: '',
      eliminar: false,
      editar: false
    }
  }
  addComponent(){
    this.setState({nuevo:<Nuevo/>});
  }
  render(){
    return(
      <div>
        <Header/>
        <div className="row">
          <div className="col-sm-2">
            <PanelUsers/>
          </div>
          <div className="col-sm-10">
              <div className="row">
                <div className="col-sm-9">
                  <div className="btn-group" role="group">
                    <buttom type="button" onClick={()=>{this.addComponent(<Nuevo/>)}} className="btn btn-secondary">Nuevo</buttom>
                    <buttom type="button" className="btn btn-secondary">Eliminar</buttom>
                    <buttom type="button" className="btn btn-secondary">Editar</buttom>
                  </div>
                  <ListaUsuario/>
                </div>
              </div>
              {this.state.nuevo}
        </div>
      </div>
    </div>
    );
  }
}
