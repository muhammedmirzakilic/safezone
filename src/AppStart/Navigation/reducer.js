import { NavigationActions } from "react-navigation";
import { AppNavigator } from "./router";

const initialNavigationState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

const navigate = (state = initialNavigationState, action) => {
  if (action.type === "Reset_Route") return initialNavigationState;
  var nextState = AppNavigator.router.getStateForAction(action, state);
  if (!nextState) {
    console.err("!!Route can not find!!");
  }
  return nextState || state;
};
export const Navigation = navigate;
