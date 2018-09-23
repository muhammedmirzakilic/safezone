import Immutable from "immutable";
import { combineReducers } from "redux-immutable";

const initialState = Immutable.fromJS({
  dummy: true,
  passengerPhone: null,
  passengerName: null,
  avatar: null
});

const base = (state = initialState, action) => {
  switch (action.type) {
    case "SetPassengerPhone":
      return state.set("passengerPhone", action.payload);
    case "SetPassengerName":
      return state.set("passengerName", action.payload);
    case "SetAvatar":
      return state.set("avatar", action.payload);
    default:
      return state;
  }
};

export const Home = combineReducers({
  base
});
