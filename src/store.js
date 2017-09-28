import { combineReducers, createStore } from 'redux';

const panelDashboardReducer = ( state = [], action ) => {
  if (action.type === "VIEW_PANEL_RIGHT") {
      return Object.assign({}, state, {detailCards: action.detailCards })
  }
  return state;
};
const dataDashboardReducer = (state = [], action )=> {
	if (action.type === "DATA_DASHBOARD") {
		return Object.assign({}, state, {data: action.data })
	}
	return state;
};
const dataUseReducer = (state = [], action)=>{
	if (action.type === "DATA_ZONA_CLIENTES") {
		return Object.assign({}, state, {data: action.data });
	}
	return state;
}
const dataRoles = (state = [], action)=>{
	if (action.type === "DATA_ROLES") {
		return Object.assign({}, state, {data: action.data });
	}
	return state;
}
const dataPoligonos = (state = [], action)=>{
	if (action.type === "POLIGONO") {
		return Object.assign({}, state, {lat: action.lat, lng: action.lng });
	}
	return state;
}
const dataDepartamentos = (state = [], action)=>{
	if (action.type === "DATA_DEPARTAMENTOS") {
		return Object.assign({}, state, {data: action.data });
	}

	return state;
}
const dataCategorias = (state = [], action)=>{
	if (action.type === "DATA_CATEGORIAS") {
		return Object.assign({}, state, {data: action.data });
	}

	return state;
}
const dataLoginCtrlOpCalle = (state = [], action)=>{
	switch(action.type) {
    case "Operador Calle":
        return Object.assign({}, state, {data: action.data });
        break;
    case "Controlador Calle":
        return Object.assign({}, state, {data: action.data });
        break;
    default:
        return state;
	} 

	return state;
}
const dataPerfilCtrlOpCalle = (state = [], action)=>{
	if (action.type === "DATA_PERFIL") {
		return Object.assign({}, state, {data: action.data });
	}

	return state;
}
const dataAllPolygonsDraws = (state = [], action)=>{
	if (action.type === "DATA_POLYGONS") {
		return Object.assign({}, state, {data: action.data, length: action.data.length });
	}

	return state;
}
const rootReducer = combineReducers({
    panelDashboardReducer,
    dataDashboardReducer,
    dataUseReducer,
    dataRoles,
    dataPoligonos,
    dataDepartamentos,
    dataCategorias,
    dataLoginCtrlOpCalle,
    dataPerfilCtrlOpCalle,
    dataAllPolygonsDraws
});
const store = createStore(rootReducer);
export default store;
