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
import CtrlCalle from './webAppComponents/ctrlCalle/CtrlCalle';
import OpCalle from './webAppComponents/opCalle/OpCalle';
import WebApp from './Indexs/webApp/indexWebApp';
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
           <Route exact path="/indexWebApp" component={WebApp}/>
           <Route exact path="/indexWebApp/CtrlCalle" component={CtrlCalle}/>
           <Route exact path="/indexWebApp/OpCalle" component={OpCalle}/>
           <Route component={Page404}/>
         </Switch>
       </Router>
     );
   }
 }
//<Route exact path="/CtrlCalle" component={CtrlCalle}/>
//<Route exact path="/OpCalle" component={OpCalle}/>