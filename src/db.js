import firebase from 'firebase';
import store from './store';

export default null;

export function Dashboard (){
  let dbRef = firebase.database().ref('orden');
  dbRef.on('value', snapshot=>{
    let i = 0;
    let data = [];
    snapshot.forEach(snap=>{
      let key = {id: Object.keys(snapshot.val())[i]};
      data.push(Object.assign({},snap.val(), key));
      store.dispatch({
        type: "DATA_DASHBOARD",
        data
      });
      i++;
    });
  });
}

export function zonaClientes(){
  let dbRef = firebase.database().ref('zona_clientes');
  dbRef.on('value', snapshot=>{
    let i = 0;
    let data = [];
    snapshot.forEach(snap=>{
      let key = {id: Object.keys(snapshot.val())[i]};
      data.push(Object.assign({},snap.val(), key));
      store.dispatch({
        type: "DATA_ZONA_CLIENTES",
        data
      });
    });
    i++;
  });
}
export function getRoles() {
    let dbRef = firebase.database().ref('roles');
    dbRef.on('value', snapshot=>{
      let data = [];
      data.push(Object.assign({},snapshot.val()));
      store.dispatch({
        type: "DATA_ROLES",
        data
      })
  });
}
export function getOneData(ref, child, dataEqualTo){
  let dbRef = firebase.database().ref(ref);
  let dbOrden = dbRef.orderByChild(child);
  let equal = dbOrden.equalTo(dataEqualTo);
  equal.on('value', snapshot=>{
    console.log(snapshot.val());
    snapshot.forEach(snap=>{console.log(snap.val())});
    
  })
  
}