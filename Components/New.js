import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {Actions} from "react-native-router-flux";
var URL = "http://192.168.70.2:3000/items/1";
var {height, width} = Dimensions.get('window');
export default class New extends Component {
constructor(props) {
     super(props);
     this.state = {
         isLoading: true,
         dataSource: new ListView.DataSource({
             rowHasChanged: (row1, row2) => row1 !== row2
         })
     };
 }
componentDidMount() {
      this.fetchData();
  }
fetchData() {
      fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData),
              isLoading: false
          });
      })
      .done();
    }
render() {
       if (this.state.isLoading) {
           return this.renderLoadingView();
           console.log("loading");
       }

       return (
            <View style={{flex:1,backgroundColor:"#E0E0E0"}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{marginTop:60,marginBottom:10,paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5,backgroundColor:"#42A5F5"}}>
                    <Text style={{fontSize:16,color:"#FFF"}}>
                      Hàng xách tay Nhật Bản
                    </Text>
                  </View>
                  <View style={{height:130,flexDirection:"row"}}>
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this.renderItems.bind(this)}
                      horizontal={true}
                    />
                  </View>
                  <View style={{marginTop:10,marginBottom:10,paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5,backgroundColor:"#42A5F5"}}>
                    <Text style={{fontSize:16,color:"#FFF"}}>
                      Sản phẩm thiên nhiên
                    </Text>
                  </View>
                  <View style={{height:130,flexDirection:"row"}}>
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this.renderItems.bind(this)}
                      horizontal={true}
                    />
                  </View>
                  <View style={{marginTop:10,marginBottom:10,paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5,backgroundColor:"#42A5F5"}}>
                    <Text style={{fontSize:16,color:"#FFF"}}>
                      Trà và cà phê
                    </Text>
                  </View>
                  <View style={{height:130,flexDirection:"row"}}>
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this.renderItems.bind(this)}
                      horizontal={true}
                    />
                  </View>
                  <View style={{marginTop:10,marginBottom:10,paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5,backgroundColor:"#42A5F5"}}>
                    <Text style={{fontSize:16,color:"#FFF"}}>
                      Hạt dinh dưỡng
                    </Text>
                  </View>
                  <View style={{height:130,flexDirection:"row"}}>
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this.renderItems.bind(this)}
                      horizontal={true}
                    />
                  </View>
                  <View style={{marginTop:10,marginBottom:10,paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5,backgroundColor:"#42A5F5"}}>
                    <Text style={{fontSize:16,color:"#FFF"}}>
                      Rau củ quả sấy
                    </Text>
                  </View>
                  <View style={{height:130,flexDirection:"row"}}>
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this.renderItems.bind(this)}
                      horizontal={true}
                    />
                  </View>
                  <View style={{marginTop:10,marginBottom:10,paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5,backgroundColor:"#42A5F5"}}>
                    <Text style={{fontSize:16,color:"#FFF"}}>
                      Đặc sản Việt Nam
                    </Text>
                  </View>
                  <View style={{height:130,flexDirection:"row"}}>
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this.renderItems.bind(this)}
                      horizontal={true}
                    />
                  </View>
                  <View style={{height:100,width:width}}>
                  </View>
                </ScrollView>
            </View>
        );
  }
renderItems(item) {
       return (
          <TouchableOpacity onPress={()=>{Actions.detail({id:item.Id})}}>
            <View style={{padding:10,backgroundColor:"#FFF",height:130,marginRight:10,marginBottom:10}}>
              <View style={{width:64,height:64,backgroundColor:"#E0E0E0",borderRadius:2}}>
                <Image style={{width:60,height:60,marginTop:2,marginLeft:2}} source={{uri : item.Image}}/>
              </View>
              <View style={{flexDirection:"row",marginTop:2}}>
                <Text style={{fontSize:10,color:"#1E88E5"}}>
                  GIÁ :
                </Text>
                <Text style={{fontSize:10,color:"#F50057",marginLeft:2}}>
                  {item.Cost}
                </Text>
                <Text style={{fontSize:10,color:"#F50057",marginLeft:2}}>
                  Đ
                </Text>
              </View>
              <View style={{marginTop:2,width:64}}>
                <Text style={{fontSize:8,color:"#1E88E5"}}>
                  {item.Name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
