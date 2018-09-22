import React, { Component } from "react";
import { View, Text, TouchableHighlight,StyleSheet,TextInput } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-native-elements";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state= {};
  }
  navigateToChooseAvatar = () => {
    this.props.dispatch(navigate("ChooseAvatar"));
  };
  render() {
    return (
      <View style={{flex: 1,backgroundColor: "#221b4b"}}>

      <View style={{flex:0.8,marginTop:50}}>
      <Text style={styles.TextStyleCss}>PNR</Text>
      <TextInput style={styles.TextInputStyleClass}
          placeholder="PNR Giriniz"
          placeholderTextColor = "gray"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({pnrText:text})}
          value={this.state.pnrText}/>
      <Text style={styles.TextStyleCss}>SOYADIN</Text>
      <TextInput
          placeholder="Soyadınızı Giriniz"
          placeholderTextColor = "gray"
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          onChangeText={(text) => this.setState({surnameText:text})}
          value={this.state.surnameText}/>
      </View>

      <View style={{flex:0.2,justifyContent: 'flex-end'}}>
      <TouchableHighlight
      style={styles.submit}
      onPress={this.navigateToChooseAvatar}
      underlayColor='#fff'>
      <Text style={[styles.submitText]}>Oyuna Başla</Text>
      </TouchableHighlight>
      </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({

  TextStyleCss:{
    textAlign: 'center',color:"#F5FCFF",fontSize: 35,fontWeight: 'bold'
  },
  
  TextInputStyleClass:{
  textAlign: 'center',
  height: 50,
   borderWidth: 2,
   borderColor: '#3fc9b0',
   borderRadius: 20 ,
   backgroundColor : "#221b4b",
   marginRight:5,
   marginLeft:5,
   color:'#F5FCFF'
  },
  
  submit:{
    marginRight:5,
    marginLeft:5,
    backgroundColor:'#3fc9b0',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 25,
      fontWeight: 'bold'
  }
   
  });

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
