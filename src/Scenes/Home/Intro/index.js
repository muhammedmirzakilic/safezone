import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Text,TouchableHighlight,Image } from "react-native";
import { Button } from "react-native-elements";
import Swiper from "react-native-swiper";
import Images from "../../../Assets/Images";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPageIntro: "Merhaba, Ben Kemal.Benimle eğlence dolu bir yolculuğa hoşgeldin"+"😊",
      secondPageIntro: "Yolculuk sırasında ödülleri toplayabilmek için gözün yukarılarda olsun🙄 Ekrandaki süperkahramanı gördüğün yere doğru ilerle🤓 Aşağıdaki ödülleri topla🎉",
      thirdPageIntro: "Büyük ödüle ulaştığında uçağa binerken ödülün seni bekliyor olacak.Bol şans💪",
      trophy: ["tall","grande","venti"]
    };
  }

  renderCups = () => {
    var images = [];
    this.state.trophy.map((element,index) => {
      images.push(
        <Image
          key={index+""}
          style={styles.cupStyle}
          source={Images[element]}
        />
      );
    });
    return <View style={styles.cupWrapper}>{images}</View>;
  };

  startTour = () => {
    this.props.dispatch(navigate("Tour"));
  };

  render() {
    return (
      <Swiper loop={false} dotColor={"#fff"} activeDotColor={"#3fc9b0"}>
        <View style={styles.slider1}>
            <View style={styles.header}>
              <Image source={Images["firstboy"]} style={styles.avatar} />
            </View>
            <View style={styles.content}>
              <Text style={styles.submitText}>{this.state.firstPageIntro}</Text>
            </View>
        </View>
        <View style={styles.slider2}>
            <View style={{marginTop:150}}>
              <Text style={styles.submitText}>{this.state.secondPageIntro}</Text>
            </View>
            {this.renderCups()}
        </View>
        <View style={styles.slider3}>
            <View style={styles.header}>
              <Image source={Images["trophy"]} style={styles.avatar} />
            </View>
            <View style={styles.content}>
              <Text style={styles.submitText}>{this.state.thirdPageIntro}</Text>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
            <TouchableHighlight
            style={styles.submit}
            onPress={this.startTour}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Oyuna Başla</Text>
            </TouchableHighlight>
            </View>
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
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop:40,
    backgroundColor: "#221b4b"
  },

  slider2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#221b4b"
  },

  slider3: {
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
  cupStyle: {
    width: 100,
    height: 100,
    marginBottom:50
  },
  cupWrapper: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  submit:{
    marginRight:5,
    marginLeft:5,
    marginBottom:50,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
