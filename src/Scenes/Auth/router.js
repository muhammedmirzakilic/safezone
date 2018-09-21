import { StackNavigator } from "react-navigation";
import BaseAuth from "./index";

export const AuthNavigator = StackNavigator(
  {
    AuthBase: {
      screen: BaseAuth
    }
  },
  {
    initialRouteName: "AuthBase",
    mode: "modal"
  }
);
