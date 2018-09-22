import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import Swiper from "react-native-swiper";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Intro sayfasi"
    };
  }

  startTour = () => {
    this.props.dispatch(navigate("Tour"));
  };

  render() {
    return (
      <Swiper>
        <View style={styles.slider1}>
          <Text>Nabiyon gardas</Text>
        </View>
        <View style={styles.slider2}>
          <Text>Iyidir sen nabiyon gardas</Text>
        </View>
        <View style={styles.slider3}>
          <Text>Ayni bizden de iste.. nolsun</Text>
          <Button
            large
            rightIcon={{ name: "code" }}
            title="Hade oyuna baslayam o vakit"
            onPress={this.startTour}
          />
        </View>
      </Swiper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({}, dispatch), dispatch };
}

const styles = {
  wrapper: {},
  slider1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  slider2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  slider3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
