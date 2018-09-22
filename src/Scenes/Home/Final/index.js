import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View,Text,TouchableHighlight, Image,BackAndroid } from "react-native";
import Images from "../../../Assets/Images";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Tebrikler🏆 Bana mükemmel eşlik ettin😄 Bir sonraki uçuşunu bekliyor olacağım🔔"
    };
  }
  navigateToExit = () => {
    BackAndroid.exitApp();
  };

  render() {
    return (
     <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Images["trophy"]} style={styles.avatar} />
        </View>
        <View style={styles.content}>
          <Text style={styles.submitText}>{this.state.title}</Text>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
        <TouchableHighlight
        style={styles.submit}
        onPress={this.navigateToExit}
        underlayColor='#fff'>
        <Text style={[styles.submitText]}>Macerayı Sonlandır</Text>
        </TouchableHighlight>
        </View>
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
      marginTop:40
    },
    header: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
    },
    avatar: {
      width: "100%",
      height: 200,
      resizeMode:"center",
      backgroundColor: 'powderblue'
    },
    content: {
      flex: 0.5
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
