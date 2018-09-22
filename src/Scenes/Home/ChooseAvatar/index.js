import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View,Text,TouchableHighlight, Image } from "react-native";
import { Button } from "react-native-elements";
import Images from "../../../Assets/Images";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Yol Arkadaşını Seçelim"
    };
  }
  navigateToIntroWithFirstCharacter = () => {
    this.props.dispatch(navigate("Intro"));
  };

  navigateToIntroWithSecondCharacter = () => {
    this.props.dispatch(navigate("Intro"));
  };
  render() {
    return (
      
      <View style={{flex:1,flexDirection: 'column',alignItems: "center",justifyContent: "center",backgroundColor : "#221b4b"}}>
      <Text style={{textAlign: 'center',color:"#F5FCFF",fontSize: 30,fontWeight: 'bold'}}>{this.state.title}</Text>
        <View style={{flexDirection: "row"}}>
            <View style={{width: 200, height: 200, backgroundColor: 'powderblue'}}>
            <TouchableHighlight 
                style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:200,
                height:200,
                backgroundColor:'powderblue'}}
              onPress={this.navigateToIntroWithFirstCharacter}>
             <Image style={{width:180,height:180}} source={Images["firstboy"]} />
            </TouchableHighlight>
            </View>
            <View style={{width: 200, height: 200, backgroundColor: 'skyblue'}}>
            <TouchableHighlight 
            style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:200,
            height:200,
            backgroundColor:'skyblue'}}
            onPress={this.navigateToIntroWithSecondCharacter}>
            <Image style={{width:180,height:180}} source={Images["secondboy"]} />
            </TouchableHighlight>
            </View> 
        </View>
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
