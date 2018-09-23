import { StackNavigator } from "react-navigation";
import HomeBase from "./index";
import ChooseAvatarScreen from "./ChooseAvatar";
import IntroScreen from "./Intro";
import TourScreen from "./Tour";
import FinalScreen from "./Final";
import SplashScreen from "./Splash";

export const HomeNavigator = StackNavigator(
  {
    HomeBase: {
      screen: HomeBase
    },
    ChooseAvatar: {
      screen: ChooseAvatarScreen
    },
    Intro: {
      screen: IntroScreen
    },
    Tour: {
      screen: TourScreen
    },
    Final: {
      screen: FinalScreen
    },
    Splash: {
      screen: SplashScreen
    }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
  }
);
