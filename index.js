/** @format */

import { AppRegistry } from "react-native";
import App from "./src/AppStart";
import { name as appName } from "./app.json";
//import Be from "./App";
import AppAndroid from "./androidKontaktIO";
AppRegistry.registerComponent(appName, () => AppAndroid);
