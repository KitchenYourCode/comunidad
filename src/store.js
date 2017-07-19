import { createStore } from 'redux';

const reducer = ( state, action ) => {
  if (action.type === "VIEW_PANEL_RIGHT") {
      return Object.assign({}, state, {detailCards: action.detailCards })
  }
  return state;
};
export default createStore (reducer, { detailCards: [] });
