import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './css/mycss.css';
import Routes from './Routes.js';



firebase.initializeApp({
    apiKey: "AIzaSyDbc6UggYWiOu3NVjmpCCtNlP84RX5zjAk",
    authDomain: "comunidad-84bd9.firebaseapp.com",
    databaseURL: "https://comunidad-84bd9.firebaseio.com",
    projectId: "comunidad-84bd9",
    storageBucket: "comunidad-84bd9.appspot.com",
    messagingSenderId: "187824824052"
});
ReactDOM.render(<Routes />, document.getElementById('root'));
