import { combineReducers } from "redux-immutable";
import { Map } from "immutable";
import * as NavigationReducer from "../Navigation/reducer";
import * as SceneReducer from "../../Scenes/reducers";

const reducers = Object.assign({}, SceneReducer, NavigationReducer);
const appReducer = combineReducers(reducers);

export default (state, action) => {
  return appReducer(state, action);
};
