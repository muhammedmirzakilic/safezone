import { StackNavigator } from "react-navigation";
import { HomeNavigator } from "../../Scenes/Home/router";
import { AuthNavigator } from "../../Scenes/Auth/router";

export const AppNavigator = StackNavigator(
  {
    Home: {
      screen: HomeNavigator
    },
    Auth: {
      screen: AuthNavigator
    }
  },
  {
    initialRouteName: "Home",
    mode: "card",
    headerMode: "none",
    cardStyle: {
      backgroundColor: "transparent",
      position: "absolute",
      // zIndex: 100,
      top: 0,
      left: 0,
      right: 0
    }
  }
);
