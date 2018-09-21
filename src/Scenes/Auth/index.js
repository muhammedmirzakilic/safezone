import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import { bindActionCreators } from "redux";

class Container extends Component {
  constructor(props) {
    super(props);
  }
  onPressBack = () => {
    this.props.dispatch(navigate("BACK"));
  };

  render() {
    return (
      <View>
        <Text> Auth Scene</Text>
        <Button title="Back" onPress={this.onPressBack} />
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
