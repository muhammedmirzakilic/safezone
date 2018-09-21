import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-native-elements";

class Container extends Component {
  constructor(props) {
    super(props);
  }
  onPressButton = () => {
    this.props.dispatch(navigate("Auth"));
  };
  navigateToChooseAvatar = () => {
    this.props.dispatch(navigate("ChooseAvatar"));
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red"
        }}
      >
        <Button
          raised
          title="Avatarini sec"
          onPress={this.navigateToChooseAvatar}
        />
        <Text style={{ color: "white" }}>Home Index</Text>
        <Button
          raised
          icon={{ name: "cached" }}
          title="Press"
          onPress={this.onPressButton}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({}, dispatch), dispatch };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
