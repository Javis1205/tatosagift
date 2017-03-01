import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
var {height, width} = Dimensions.get('window');
import * as Ac from "./reducers/Actions.js";
function mapStateToProps(state){
  return {DATA:state.Items}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
export class NavBar extends Component {
  clickLeft(){
    if(this.props.DATA.isOpenMenu){
      this.props.MENU_SIDE({VALUE:false});
    }else {
      this.props.MENU_SIDE({VALUE:true});
    }
  }
  clickRight(){
    // gio hang
    Actions.giohang()
  }
  render(){
    return(
      <View style={{flexDirection:"row",backgroundColor:"#42A5F5",height:55,justifyContent:"space-between",alignItems:"center",padding:10}}>
        <View>
          <TouchableOpacity style={{marginTop:-5}} onPress={()=>{this.clickLeft()}}>
            <Icon name='bars' size={30} style={{color:'#0D47A1'}} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize:20,color:"#FFF"}}>
            TATOSA-GIFT
          </Text>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:-5}} onPress={()=>{this.clickRight()}}>
          <View style={{marginLeft:30,backgroundColor:this.props.DATA.isnull ? "#42A5F5": "#ee2211",borderRadius:20,width:20,height:20,alignItems:"center"}}>
              <Text style={{fontSize:11,marginTop:2,color:'#FFF'}}>{
                this.props.DATA.isnull ? "" : this.props.DATA.value
              }</Text>
          </View>
            <View style={{marginTop:-22}}>
              <Icon name='shopping-cart' size={30} style={{color:'#0D47A1'}} />
            </View>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
