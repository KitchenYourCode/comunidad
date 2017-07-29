import { combineReducers, createStore } from 'redux';

const panelDashboardReducer = ( state = [], action ) => {
  if (action.type === "VIEW_PANEL_RIGHT") {
      return Object.assign({}, state, {detailCards: action.detailCards })
  }
  return state;
};
const rootReducer = combineReducers({
    panelDashboardReducer: panelDashboardReducer,
});
const store = createStore(rootReducer);
export default store;
