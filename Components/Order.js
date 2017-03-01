import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
var {height, width} = Dimensions.get('window');
export default class InputSearch extends Component {
  render(){
    return(
          <View>
            <View style={{flexDirection:"row",height:height/4,justifyContent:"space-between",marginTop:15,padding:5}}>
              <View>
                <TouchableOpacity>
                  <Image
                    style={{height:height/4,width:(width-15)/2}}
                    source={{uri: 'https://uphinhnhanh.com/images/2017/02/26/order.png'}}
                  />
                </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity>
                <Image
                  style={{height:height/4,width:(width-15)/2}}
                  source={{uri: 'https://uphinhnhanh.com/images/2017/02/26/sale.png'}}
                />
              </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={{height:(height/10)-10,width:width,marginTop:8}}
                  source={{uri: 'https://uphinhnhanh.com/images/2017/02/26/quangcao.png'}}
                />
              </TouchableOpacity>
            </View>
          </View>
    );
  }
}
