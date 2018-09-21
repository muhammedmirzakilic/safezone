import { StackNavigator } from "react-navigation";
import HomeBase from "./index";
import ChooseAvatarScreen from "./ChooseAvatar";
import IntroScreen from "./Intro";
export const HomeNavigator = StackNavigator(
  {
    Home: {
      screen: HomeBase
    },
    ChooseAvatar: {
      screen: ChooseAvatarScreen
    },
    Intro: {
      screen: IntroScreen
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
