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

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.cupStyle} source={Images["tall"]} />
        {/* <View style={styles.header}>
          <Image />
        </View>
        <View style={styles.content}>
          <Text>{this.state.stateText}</Text>
        </View>
        <Text>{this.state.title}</Text>
        <Button raised title="Introya ilerle" onPress={this.navigateToIntro} /> */}
        <View>
          <Image
            style={styles.cupStyle}
            source={
              Images[
                this.state.cups[0].name + this.state.cups[0].isActive
                  ? ""
                  : "Passive"
              ]
            }
          />
          <Image
            style={styles.cupStyle}
            source={
              Images[
                this.state.cups[1].name + this.state.cups[1].isActive
                  ? ""
                  : "Passive"
              ]
            }
          />
          <Image
            style={styles.cupStyle}
            source={
              Images[
                this.state.cups[2].name + this.state.cups[2].isActive
                  ? ""
                  : "Passive"
              ]
            }
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  header: {
    flex: 0.3
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
    width: 50,
    height: 50
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
