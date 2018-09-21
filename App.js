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
const region = {
  identifier: "Mac",
  uuid: "FDA50693-A4E2-4FB1-AFCF-C6EB07647825"
};

// Request for authorization while the app is open
Beacons.requestWhenInUseAuthorization();
Beacons.requestAlwaysAuthorization();

Beacons.startMonitoringForRegion(region);
Beacons.startRangingBeaconsInRegion(region);

Beacons.startUpdatingLocation();

// Listen for beacon changes
const subscription = DeviceEventEmitter.addListener("beaconsDidRange", data => {
  console.log(JSON.stringify(data.beacons));
  // data.region - The current region
  // data.region.identifier
  // data.region.uuid

  // data.beacons - Array of all beacons inside a region
  //  in the following structure:
  //    .uuid
  //    .major - The major version of a beacon
  //    .minor - The minor version of a beacon
  //    .rssi - Signal strength: RSSI value (between -100 and 0)
  //    .proximity - Proximity value, can either be "unknown", "far", "near" or "immediate"
  //    .accuracy - The accuracy of a beacon
});

export default class App extends Component {
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
