import React, { Component } from "react";
import { connect as reduxConnect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Text, Image, DeviceEventEmitter, Platform } from "react-native";
import { Model } from "./model";
import Images from "../../../Assets/Images";

import Kontakt from "react-native-kontaktio";
const { connect, startScanning } = Kontakt;

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = new Model(props);
  }
  componentDidMount() {
    /*
    if (Platform.OS != "ios") {
      connect()
        .then(() => startScanning())
        .catch(error => console.log("error", error));

      DeviceEventEmitter.addListener(
        "beaconsDidUpdate",
        ({ beacons, region }) => {
          var inArea = false;
          console.log("beaconsDidUpdate", beacons, region);
          beacons.map(beacon => {
            var { uuids, proximities, lastProximityIndex } = this.state;
            if (
              beacon.uuid == this.state.uuids[this.state.level].toLowerCase()
            ) {
              inArea = true;
              var pIndex = 4;
              proximities.map((element, index) => {
                if (beacon.proximity == element) {
                  pIndex = index;
                }
              });
              if (pIndex == 0) {
                var { level, cups } = this.state;
                lastProximityIndex = 3;
                cups[level].isActive = true;
                level++;
                this.setState({ lastProximityIndex, cups, level });
                if (level == 3) {
                  DeviceEventEmitter.removeListener("beaconsDidUpdate");
                  setTimeout(() => {
                    this.props.dispatch(navigate("Final"));
                  }, 3000);
                }
              } else if (pIndex < lastProximityIndex) {
                lastProximityIndex = pIndex;
                this.setState({ lastProximityIndex });
              }
            }
            if (inArea) {
              return;
            }
          });
        }
      );
    }
    */
  }
  componentDidMount() {
    setTimeout(() => {
      var prevPIndex = this.state.lastProximityIndex;
      var prevLevel = this.state.level;
      prevPIndex--;
      if (prevPIndex == -1) {
        prevLevel++;
      }
      if (prevLevel == 3) {
        this.props.dispatch(navigate("Final"));
      } else
        this.setState({ lastProximityIndex: prevPIndex, level: prevLevel });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      var prevPIndex = prevState.lastProximityIndex;
      var prevLevel = prevState.level;
      prevPIndex--;
      var cups = prevState.cups;
      if (prevPIndex == -1) {
        cups[prevLevel].isActive = true;
        prevLevel++;
        prevPIndex = 3;
      }
      if (prevLevel == 3) {
        this.props.dispatch(navigate("Final"));
      } else
        this.setState({
          lastProximityIndex: prevPIndex,
          level: prevLevel,
          cups
        });
    }, 1000);
  }

  renderCups = () => {
    var images = [];
    this.state.cups.map((element, index) => {
      images.push(
        <Image
          key={index + ""}
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
          <Image
            source={Images[this.state.avatars[this.state.level]]}
            style={styles.avatar}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.submitText}>
            {this.state.proximityTexts[this.state.lastProximityIndex]}
          </Text>
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
    backgroundColor: "#221b4b",
    marginTop: 40
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
    width: 120,
    height: 120
  },
  cupWrapper: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  }
};

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({}, dispatch), dispatch };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Container);
