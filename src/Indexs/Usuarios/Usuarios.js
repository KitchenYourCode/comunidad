import React, { Component} from 'react';

import Header from '../../components/Template/Header/Header.js';
import PanelUsers from '../../components/Template/Users/PanelUsers.js';
import { zonaClientes } from '../../db';
import store from '../../store';
import Users from '../../components/users/Users';

export default class Usuarios extends Component {
  constructor() {
    super();
    zonaClientes();
    this.state = {
      dataStateUser: []
    };
      store.subscribe(()=>{
      this.setState({
        dataStateUser: store.getState().dataUseReducer.data
      });
    });

  }
	render(){
    return (
      <div>
      <Header />
        <div className="row">
          <div className="col-sm-2">
            <PanelUsers/>
          </div>
          <div className="col-sm-10" >
            <Users datos= { this.state.dataStateUser }/>
          </div>
        </div>
      </div>
      );
	}
}
