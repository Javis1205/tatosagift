import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import SanPham from './SanPham.js';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Ac from "./reducers/Actions.js";
import {Actions} from "react-native-router-flux";
var {height, width} = Dimensions.get('window');
var SANPHAM = [];
var DataSource = [] ;
function mapStateToProps(state){
  return {DATA:state.Items}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
export class GioHang extends Component{
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
       this.props.COST({VALUE:0});
       SANPHAM = [];
   }
  pullIdOfProduct(num,DATA){
    var items = [];
    for(i=0;i<num;i++){
      items[i] =  DATA[i];
    }
    return items;
  }
  renderProduct(ARRAY){
    for (var i=0; i <this.props.DATA.value; i++) {
      let x = ARRAY[i]
      SANPHAM.push(<SanPham id={x} />);
    }
  }
  componentWillMount(){
    let ARRAY = this.pullIdOfProduct(this.props.DATA.value,this.props.DATA.Product);
    this.renderProduct(ARRAY);
  }
  fetchData(id) {
        id = id.toString();
        URL = URL + id;
        fetch(URL)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                id : responseData[0].Id,
                name: responseData[0].Name,
                image: responseData[0].Image,
                cost: responseData[0].Cost,
                info1: responseData[0].Info1,
                info2: responseData[0].Info2,
                status: responseData[0].Status,
                isLoading: false
            });
        })
        .done();
      }

  render(){
    console.log(this.props.DATA.Product);
    return(
      <View style={{flex:1,marginTop:50,backgroundColor:"#ddd"}}>
        <View style={{height:((height-100)/6)*4}}>
          <ScrollView style={{backgroundColor:"#ddd"}}>
            {SANPHAM}
          </ScrollView>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,height:(height-100)/6-50,marginTop:20}}>
          <Text style={{fontSize:16,color:"#ee2211"}}>
            Tổng tiền :
          </Text>
          <Text style={{fontSize:16,color:"#ee2211"}}>
            {this.props.DATA.cost} Đ
          </Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,height:(height-100)/6}}>
          <View style={{marginTop:20,flexDirection:"row"}}>
            <View style={{alignItems:"center",width:(width/2)-20,backgroundColor:"#ee2211",marginRight:10}}>
              <TouchableOpacity style={{flexDirection:"row",paddingLeft:30,paddingRight:30,paddingTop:7,paddingBottom:7,marginTop:7}} >
                <Icon name='money' size={20} style={{color:'#FFF',marginTop: 0, marginRight:10}} />
                <Text style={{color:'#FFF', fontSize:16}}>
                  Thanh Toán
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems:"center",width:(width/2)-20,backgroundColor:"#42A5F5",marginLeft:10}}>
              <TouchableOpacity style={{flexDirection:"row",paddingLeft:30,paddingRight:30,paddingTop:7,paddingBottom:7,marginTop:7}}>
                <Icon name='arrow-right' size={20} style={{color:'#FFF',marginTop: 0, marginRight:10}} />
                <Text style={{color:'#FFF', fontSize:16}}>
                  Mua Tiếp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(GioHang);
