import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import Home from './Indexs/Home/Home.js';
import Dashboard from './Indexs/Dashboard/Dashboard.js';
import CrearUsuarios from './Indexs/CrearUsuarios/CrearUsuarios.js';
import CrearPoligonos from './Indexs/CrearPoligonos/CrearPoligonos.js';
import Usuarios from './Indexs/Usuarios/Usuarios.js';
//import CtrlCalle from './Indexs/CtrlCalle/CtrlCalle.js';
//import OpCalle from './Indexs/OpCalle/OpCalle.js';
import WebApp from './Indexs/webApp/index';
import Page404 from './components/404.js';

 export default class Routes extends Component {

   render(){
      return(
       <Router forceRefresh={true}>
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/Dashboard" component={Dashboard}/>
           <Route exact path="/CrearUsuarios" component={CrearUsuarios}/>
           <Route exact path="/CrearPoligonos" component={CrearPoligonos}/>
           <Route exact path="/Usuarios" component={Usuarios}/>
           <Route exact path="/index" component={WebApp}/>
           <Route component={Page404}/>
         </Switch>
       </Router>
     );
   }
 }
//<Route exact path="/CtrlCalle" component={CtrlCalle}/>
//<Route exact path="/OpCalle" component={OpCalle}/>