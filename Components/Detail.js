import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,Alert
} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Ac from "./reducers/Actions.js";
import {Actions} from "react-native-router-flux";
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';

function mapStateToProps(state){
  return {DATA:state.Items}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}

export class New extends Component {
constructor(props) {
     super(props);
     this.state = {
         isLoading: true,
         id:0,
         name:"",
         image:"",
         cost:0,
         info1:"",
         info2:"",
         status:0,
     };
 }
componentDidMount() {
  this.setState({
      id : this.props.Id,
      name: this.props.Name,
      image: this.props.Image,
      cost: this.props.Cost,
      info1: this.props.Info1,
      info2: this.props.Info2,
      status: this.props.Status,
      isLoading: false
  });
  }
xacthuc(){
  Alert.alert(
    'Xác Nhận',
    'Ban có muốn thêm sản phẩm vào giỏ hàng không ?',
    [
      {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Có', onPress: () => {this.addCart()}},
    ],
    { cancelable: false }
  )
}
addCart(){
  let value = this.props.DATA.value + 1;
  this.props.ADDCART({VALUE:value,ID:this.state.id});
  this.giohang();
}
giohang(){
  Actions.giohang();
}
render() {
       if (this.state.isLoading) {
           return this.renderLoadingView();
       }

       return (
            <View style={{flex:1,backgroundColor:"#E0E0E0"}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{marginTop:55}}>
                    <Image style={{width:width,height:(width*2)/3}} source={{uri: this.state.image}}/>
                  </View>
                  <View style={{marginTop:10,marginLeft:10}}>
                    <Text style={{fontSize:20,color:"#1E88E5"}}>
                      TÊN SẢN PHẨM :
                    </Text>
                    <Text style={{fontSize:18,color:"#F50057",marginLeft:3}}>
                      {this.state.name}
                    </Text>
                  </View>
                  <View style={{flexDirection:"row",marginTop:10,marginLeft:10}}>
                    <Text style={{fontSize:20,color:"#1E88E5"}}>
                      GIÁ :
                    </Text>
                    <Text style={{fontSize:20,color:"#F50057",marginLeft:5}}>
                      {this.state.cost}
                    </Text>
                    <Text style={{fontSize:20,color:"#F50057",marginLeft:5}}>
                      đ
                    </Text>
                  </View>
                  <View style={{marginTop:10,marginLeft:10}}>
                    <Text style={{fontSize:20,color:"#1E88E5"}}>
                      MÔ TẢ SẢN PHẨM :
                    </Text>
                    <Text style={{fontSize:15,color:"#F50057",marginLeft:5,marginTop:10}}>
                      {this.state.info1}
                    </Text>
                  </View>
                  <View style={{marginTop:10,marginLeft:10}}>
                    <Text style={{fontSize:20,color:"#1E88E5"}}>
                      HƯỚNG DẪN SỬ DỤNG :
                    </Text>
                    <Text style={{fontSize:15,color:"#F50057",marginLeft:5,marginTop:10}}>
                      {this.state.info2}
                    </Text>
                  </View>
                  <View style={{marginTop:20,marginLeft:10,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity style={{width:(width/2)-20,backgroundColor:"#F06292",flexDirection:"row",paddingLeft:30,paddingRight:30,paddingTop:7,paddingBottom:7}} onPress={()=>{this.xacthuc()}}>
                      <Icon name='cart-plus' size={20} style={{color:'#FFF',marginTop: 0, marginRight:10}} />
                      <Text style={{color:'#FFF', fontSize:16}}>
                        THÊM VÀO
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Actions.new()}} style={{marginLeft:20,width:(width/2)-20,backgroundColor:"#1E88E5",flexDirection:"row",paddingLeft:30,paddingRight:30,paddingTop:7,paddingBottom:7}}>
                      <Icon name='arrow-circle-right' size={20} style={{color:'#FFF',marginTop: 0, marginRight:10}} />
                      <Text style={{color:'#FFF', fontSize:16}}>
                        MUA TIẾP
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{height:100,width:width}}>
                  </View>
                </ScrollView>
            </View>
        );
  }
renderItems(item) {
       return (
         <View>
         </View>
       );
   }
renderLoadingView() {
      return (
          <View style={{flex:1,alignItems:"center"}}>
              <Text style={{fontSize:30,color:"#000"}}>
                LOADING ...
              </Text>
          </View>
      );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(New);
