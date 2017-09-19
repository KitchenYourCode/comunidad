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
export function getLogginCrtlOpCalle(ref, child, email, pass){
  let dbRef = firebase.database().ref(ref);
  let dbOrden = dbRef.orderByChild(child);
  let equal = dbOrden.equalTo(email);
  equal.on('value', snapshot=>{
    console.log(snapshot.val());
    snapshot.forEach(snap=>{
       if (pass == snap.val().password ){
        let data = [];
        data.push(Object.assign({},{id:snap.key, rol: snap.val().rol}));
        console.log(snap.key);
        store.dispatch({
          type: snap.val().rol,
          data
        })
      }else{
        console.log("no entro")
      }
    });
    
  })
  
}
/*export function getOneData(ref, child, dataEqualTo){
  let dbRef = firebase.database().ref(ref);
  let dbOrden = dbRef.orderByChild(child);
  let equal = dbOrden.equalTo(dataEqualTo);
  equal.on('value', snapshot=>{
    console.log(snapshot.val());
    snapshot.forEach(snap=>{
      console.log(snap.val().dni)
    });
    
  })
  
}*/
  export function getDepartamentos(){
  let dbRef = firebase.database().ref('departamentos');
  dbRef.on('value', snapshot=>{
    let data = [];
    snapshot.forEach(snap=>{
      data.push(Object.assign({},snap.val()));
      store.dispatch({
        type: "DATA_DEPARTAMENTOS",
        data
      });
    });
  });
}
export function getCategorias() {
  let dbRef = firebase.database().ref("categorias");
  dbRef.on('value', snapshot=>{
    let i = 0;
    let data = [];
    snapshot.forEach(snap=>{
      data.push(Object.assign({},snap.val()));
      store.dispatch({
        type: "DATA_CATEGORIAS",
        data
      });
      i++;
    });
  });
}
export function getPerfil(child){
  let dbRef = firebase.database().ref("zona_clientes");
  let dbChild = dbRef.child(child);
  let dbOrden = dbChild.orderByKey();
  let data = [];
  dbOrden.on('value', snapshot=>{
    data.push(Object.assign({},snapshot.val()));
    store.dispatch({
      type: "DATA_PERFIL",
      data
    });
  })
}