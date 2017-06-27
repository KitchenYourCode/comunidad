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
import Page404 from './components/404.js';

 export default class Routes extends Component {
   render(){
     return(
       <Router>
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/Dashboard" component={Dashboard}/>
           <Route exact path="/CrearUsuarios" component={CrearUsuarios}/>
           <Route exact path="/CrearPoligonos" component={CrearPoligonos}/>
           <Route component={Page404}/>
         </Switch>
       </Router>
     );
   }
 }
