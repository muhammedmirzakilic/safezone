import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import Cups from "./cups";
import { Model } from "./model";
import Images from "../../../Assets/Images";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = new Model(props);
  }
  componentDidMount() {
    setTimeout(() => {
      var { cups } = this.state;
      cups[0].isActive = true;
      this.setState({ cups });
    }, 3000);
    setTimeout(() => {
      var { cups } = this.state;
      cups[1].isActive = true;
      this.setState({ cups });
    }, 7000);
    setTimeout(() => {
      var { cups } = this.state;
      cups[2].isActive = true;
      this.setState({ cups });
    }, 10000);
  }

  renderCups = () => {
    var images = [];
    this.state.cups.map(element => {
      images.push(
        <Image
          style={styles.cupStyle}
          source={Images[element.name + (element.isActive ? "" : "Passive")]}
        />
      );
    });
    return <View style={styles.cupWrapper}>{images}</View>;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Images[this.state.avatar]} style={styles.avatar} />
        </View>
        <View style={styles.content}>
          <Text>{this.state.stateText}</Text>
        </View>
        {this.renderCups()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 2
  },
  header: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: "100%",
    height: 200
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0
  },
  content: {
    flex: 0.5
  },
  imageWrapper: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  cupStyle: {
    width: 100,
    height: 100
  },
  cupWrapper: {
    flexDirection: "row",
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
