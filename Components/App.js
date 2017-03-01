import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import {View,Text,TouchableOpacity} from 'react-native';
import { createStore, applyMiddleware, compose,bindActionCreators } from 'redux';
import Home from              "../Components/Home.js";
import Search from            "../Components/Search.js";
import New from               "../Components/New.js";
import Reducers from          '../Components/reducers/Reducers.js';
import {Scene, Router} from   'react-native-router-flux';
import * as Ac from      "../Components/reducers/Actions.js";
import GioHang from           "../Components/GioHang.js"
import Gioithieu from         "../Components/Gioithieu.js";
import Lienhe from            "../Components/Lienhe.js";
import Cauhoi from            "../Components/Cauhoi.js";
import Detail from            "../Components/Detail.js";
import {Actions} from           "react-native-router-flux";
const RouterWithRedux = connect()(Router);
import Icon from 'react-native-vector-icons/FontAwesome';
//redux
function mapStateToProps(state){
  return{DATA:state.Items}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
//redux

// other imports...

// create store...

export class App extends Component {

  render () {
    // this.props.MENU_SIDE({VALUE:true});
    const TabIcon = ({ selected, title }) => {
  switch (title) {
    case "Trang Chủ":
      return (
        <View style={{alignItems:"center"}}>
          <Icon name='home' size={30} style={{color: selected ? '#0D47A1' :'#FFF'}} />
          <Text style={{color: selected ? '#0D47A1' :'#FFF'}}>{title}</Text>
        </View>

      );
      break;
      case "Tìm Kiếm":
        return (
          <View style={{alignItems:"center"}}>
            <Icon name='search' size={30} style={{color: selected ? '#0D47A1' :'#FFF'}} />
            <Text style={{color: selected ? '#0D47A1' :'#FFF'}}>{title}</Text>
          </View>

        );
        break;
        case "Sản Phẩm":
          return (
            <View style={{alignItems:"center"}}>
              <Icon name='newspaper-o' size={30} style={{color: selected ? '#0D47A1' :'#FFF'}} />
              <Text style={{color: selected ? '#0D47A1' :'#FFF'}}>{title}</Text>
            </View>

          );
          break;
    default:

  }
}
    return (

        <RouterWithRedux>
          <Scene key="root">
            <Scene key="tabbar" tabBarStyle={{ backgroundColor:'#42A5F5',height:60}} tabs >
              <Scene key="homed" title="Trang Chủ" icon={TabIcon}>
                  <Scene key="home" component={Home} hideNavBar={true}/>
                  <Scene key="giohang" component={GioHang} title="Giỏ Hàng của bạn" hideNavBar={false} titleStyle={{color:"#FFF"}} navigationBarStyle={{backgroundColor:"#42A5F5"}} backButtonTextStyle={{color:"#FFF"}}/>
                  <Scene key="gioithieu" component={Gioithieu} title="Giới thiệu về cửa hàng" hideNavBar={false} titleStyle={{color:"#FFF"}} navigationBarStyle={{backgroundColor:"#42A5F5"}} backButtonTextStyle={{color:"#FFF"}}/>
                  <Scene key="lienhe" component={Lienhe} title="Liên hệ với chúng tôi" hideNavBar={false} titleStyle={{color:"#FFF"}} navigationBarStyle={{backgroundColor:"#42A5F5"}} backButtonTextStyle={{color:"#FFF"}}/>
                  <Scene key="cauhoi" component={Cauhoi} title="Những câu hỏi thường gặp" hideNavBar={false} titleStyle={{color:"#FFF"}} navigationBarStyle={{backgroundColor:"#42A5F5"}} backButtonTextStyle={{color:"#FFF"}}/>
              </Scene>
              <Scene key="searchd" title="Tìm Kiếm" icon={TabIcon}>
                <Scene key="search" component={Search} title="Tìm kiếm" hideNavBar={false} titleStyle={{color:"#FFF"}} navigationBarStyle={{backgroundColor:"#42A5F5"}} backButtonTextStyle={{color:"#FFF"}}/>
              </Scene>
              <Scene key="newd" title="Sản Phẩm" icon={TabIcon}>
                <Scene key="new" component={New} title="Sản Phẩm" onBack={()=>{Actions.homed()}} hideNavBar={false} titleStyle={{color:"#FFF"}} navigationBarStyle={{backgroundColor:"#42A5F5"}} backButtonTextStyle={{color:"#FFF"}}/>
                <Scene key="detail" component={Detail} title="Chi Tiết Sản Phẩm" hideNavBar={false} titleStyle={{color:"#FFF"}} navigationBarStyle={{backgroundColor:"#42A5F5"}} backButtonTextStyle={{color:"#FFF"}}/>
              </Scene>
            </Scene>

          </Scene>
        </RouterWithRedux>
    );
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(App);
