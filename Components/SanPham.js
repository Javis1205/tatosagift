import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
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
export class SanPham extends Component {
  fetchData() {
        let DATA = [];
        let id = this.props.id;
        let URL = "http://192.168.100.3:3000/item/" + id.toString();
        fetch(URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            image:responseData[0].Image,
            id:responseData[0].Id,
            name:responseData[0].Name,
            info1:responseData[0].Info1,
            info2:responseData[0].Info2,
            status:responseData[0].Status,
            cost:responseData[0].Cost,
          });
          let cost = Number(this.props.DATA.cost)+Number(this.state.cost);
          this.props.COST({VALUE:cost});
        })
        .done();
      }
  constructor(props){
    super(props);
    this.state={
      id:0,
      name:"",
      image:"",
      cost:0,
      info1:"",
      info2:"",
      status:0
    }
  }
  componentWillMount(){
    this.fetchData();
  }
  reLoad(){
    Actions.home();
  }
  DelCart(id){
    let num = this.props.DATA.value -1;
    this.props.DELCART({VALUE:id,NUM:num})
    this.reLoad();
  }
  render(){
    console.log(this.state.name);
    return(
      <View style={{backgroundColor:"#FFF",flexDirection:"row",marginTop:10,padding:10}}>
        <View>
          <Image style={{width:60,height:100}} source={{uri : this.state.image}}/>
        </View>
        <View style={{marginLeft:10}}>
          <View>
            <Text style={{fontSize:18,color:"#1E88E5"}}>
              {this.state.name}
            </Text>
          </View>
          <View style={{flexDirection:"row",marginTop:10}}>
            <Text style={{fontSize:16,color:"#1E88E5"}}>
              GIÁ :
            </Text>
            <Text style={{fontSize:16,color:"#F50057",marginLeft:2}}>
              {this.state.cost}
            </Text>
            <Text style={{fontSize:16,color:"#F50057",marginLeft:2}}>
              Đ
            </Text>
          </View>
            <TouchableOpacity style={{flexDirection:"row",width:150,paddingLeft:10,paddingRight:10,paddingTop:7,paddingBottom:7,backgroundColor:"#ee2211",marginTop:5}} onPress={()=>{this.DelCart(this.state.id)}}>
              <Icon name='trash' size={20} style={{color:'#FFF',marginTop: 0, marginRight:10}} />
              <Text style={{color:'#FFF', fontSize:16}}>
                Xóa Sản Phẩm
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SanPham);
