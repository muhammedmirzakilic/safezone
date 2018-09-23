import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View,Image, } from "react-native";
import Images from "../../../Assets/Images";

class Container extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout(()=>{
        this.props.dispatch(navigate("HomeBase"));
      },3000);
  }
 

  render() {
    return (
     <View style={styles.container}>
          <Image style={{width: "100%",height: 200}} source={Images["splash"]}/>
    </View>
    );
  }
}

const styles = {
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#221b4b",
      alignItems:"center"
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
