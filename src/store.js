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
		return Object.assign({}, state, {data: action.poligono });
	}
	return state;
}
const rootReducer = combineReducers({
    panelDashboardReducer,
    dataDashboardReducer,
    dataUseReducer,
    dataRoles,
    dataPoligonos
});
const store = createStore(rootReducer);
export default store;
