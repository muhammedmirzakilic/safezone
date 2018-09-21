import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from "react-native";

import Beacons from "react-native-beacons-manager";

// Define a region which can be identifier + uuid,
// identifier + uuid + major or identifier + uuid + major + minor
// (minor and major properties are numbers)

export default class App extends Component {
  componentWillMount() {
    const region = {
      identifier: "Mac",
      uuid: "FDA50693-A4E2-4FB1-AFCF-C6EB07647825"
    };

    // start iBeacon detection (later will add Eddystone and Nordic Semiconductor beacons)
    Beacons.detectIBeacons();
    // Monitor beacons inside the region
    Beacons.startMonitoringForRegion(region) // or like  < v1.0.7: .startRangingBeaconsInRegion(identifier, uuid)
      .then(() => console.log("Beacons monitoring started succesfully"))
      .catch(error =>
        console.log(`Beacons monitoring not started, error: ${error}`)
      );
  }
  componentDidMount() {
    //
    // component state aware here - attach events
    //
    this.didRange = DeviceEventEmitter.addListener(
      "beaconsDidRange",
      ({ identifier, uuid, minor, major, ...others }) => {
        console.log("monitoring - didRange data: ", {
          identifier,
          uuid,
          minor,
          major
        });
        console.log(JSON.stringify(others));
      }
    );

    this.didUpdate = DeviceEventEmitter.addListener(
      "beaconsDidUpdate",
      ({ identifier, uuid, minor, major, ...others }) => {
        console.log("monitoring - beaconsDidUpdate data: ", {
          identifier,
          uuid,
          minor,
          major
        });
        console.log(JSON.stringify(others));
      }
    );

    //     // monitoring:
    //     this.beaconsDidEnterEvent = DeviceEventEmitter.addListener(
    //       "regionDidEnter",
    //       ({ identifier, uuid, minor, major, ...others }) => {
    //         console.log("monitoring - regionDidEnter data: ", {
    //           identifier,
    //           uuid,
    //           minor,
    //           major
    //         });
    //         console.log(JSON.stringify(others));
    //       }
    //     );

    //     this.regionDidExitEvent = DeviceEventEmitter.addListener(
    //       "regionDidExit",
    //       ({ identifier, uuid, minor, major }) => {
    //         console.log("monitoring - regionDidExit data: ", {
    //           identifier,
    //           uuid,
    //           minor,
    //           major
    //         });
    //       }
    //     );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Hello </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
