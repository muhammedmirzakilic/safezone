import { StackNavigator } from "react-navigation";
import HomeBase from "./index";

export const HomeNavigator = StackNavigator(
  {
    Home: {
      screen: HomeBase
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
