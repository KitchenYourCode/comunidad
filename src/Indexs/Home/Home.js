import React, { Component } from 'react';


import Header from '../../components/Template/Header/Header.js';
import LogIn from '../../components/LogIn/LogIn.js';
import {
  Link
} from 'react-router-dom';
export default class Home extends Component{
  render(){
    return(
      <div>
      <Header/>

      <LogIn />
    </div>
    );
  }
}
