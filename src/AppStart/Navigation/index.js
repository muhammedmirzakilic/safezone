import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addNavigationHelpers } from "react-navigation";
import { BackHandler, NetInfo, View, Dimensions, Text } from "react-native";
import { AppNavigator } from "./router";
import { navigate } from "./actions";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
const addListener = () => createReduxBoundAddListener("root");
const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

class NavContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backButtonHandler); //we need to handle back button action manually because of navigation and redux integration
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.backButtonHandler
    );
  }
  backButtonHandler = () => {
    return this.props.dispatch(navigate("BACK"));
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener: addListener()
          })}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    nav: state.get("Navigation")
  };
};

export default connect(mapStateToProps)(NavContainer);
