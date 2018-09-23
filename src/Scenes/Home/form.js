import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Image
} from "react-native";
import Images from "../../Assets/Images";

const Container = props => {
  return (
    <View>
      <Text style={styles.TextStyleCss}>PNR</Text>
      <TextInput
        style={styles.TextInputStyleClass}
        placeholder="PNR Giriniz"
        placeholderTextColor="gray"
        underlineColorAndroid="transparent"
        onChangeText={text => props.updateForm("pnrText", text)}
        value={props.pnrText}
      />
      <Text style={styles.TextStyleCss}>SOYADIN</Text>
      <TextInput
        placeholder="Soyadınızı Giriniz"
        placeholderTextColor="gray"
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
        onChangeText={text => props.updateForm("surnameText", text)}
        value={props.surnameText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyleCss: {
    textAlign: "center",
    color: "#F5FCFF",
    fontSize: 35,
    fontWeight: "bold"
  },

  TextInputStyleClass: {
    textAlign: "center",
    height: 50,
    borderWidth: 2,
    borderColor: "#3fc9b0",
    borderRadius: 20,
    backgroundColor: "#221b4b",
    marginRight: 5,
    marginLeft: 5,
    color: "#F5FCFF"
  },
  gif: {
    width: "100%",
    height: 200
  },
  submit: {
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: "#3fc9b0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    height: 50
  }
});

export default Container;
