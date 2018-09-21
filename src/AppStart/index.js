import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import store from "./Application/Store";
import NavigationContainer from "./Navigation";
import { Provider } from "react-redux";
import "../Global/actions";

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    );
  }
}

const App = () => {
  <Provider store={store}>
    <NavigationContainer />
  </Provider>;
};

export default AppContainer;
