import Immutable from "immutable";
import { combineReducers } from "redux-immutable";

const initialState = Immutable.fromJS({
  dummy: true
});

const base = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const Home = combineReducers({
  base
});
