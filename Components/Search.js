import React, { Component } from 'react';
import {
  View,
  Text
} from "react-native";
import {Actions} from 'react-native-router-flux';

export default class Search extends Component {
  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text onPress={()=>{console.log("da an");Actions.home()}}>
          Order
        </Text>
      </View>
    );
  }
}
