import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Container = props => {
  return (
    <View style={styles.wrapper}>
      <Text>Cup1</Text>
      <Text>Cup2</Text>
      <Text>Cup3</Text>
    </View>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
};

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
