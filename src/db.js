import firebase from 'firebase';
import store from './store';
export default [
  {
    id: 1,
    title: "titulo1",
    coordenadas: "-32.8987521, -68.8387992175",
    correo: "uno@dos.tres",
    urlfoto: "http://www.regionnet.com.ar/wp-content/uploads/2016/02/2902_EstadodeRUTAS.jpg",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    estado: "Iniciado"
  },
  {
    id:2,
    title: "titulo2",
    coordenadas: "-32.8987521, -68.8387992175",
    correo: "dos@dos.tres",
    urlfoto: "http://www.regionnet.com.ar/wp-content/uploads/2016/02/2902_EstadodeRUTAS.jpg",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    estado: "Iniciado"
  },
  {
    id:3,
    title: "titulo3",
    coordenadas: "-32.8987521, -68.8387992175",
    correo: "tres@dos.tres",
    urlfoto: "http://www.regionnet.com.ar/wp-content/uploads/2016/02/2902_EstadodeRUTAS.jpg",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    estado: "Iniciado"
  }
];
export function Dashboard (){
  let dbRef = firebase.database().ref('orden');
  dbRef.on('value', snapshot=>{
    let i = 0;
    snapshot.forEach(snap=>{
      let key = {id: Object.keys(snapshot.val())[i]};
      let data = Object.assign({},snap.val(), key);
      console.log(data);
      i++;
    });
    
  });
}
