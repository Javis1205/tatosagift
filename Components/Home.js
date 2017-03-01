import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import{Container} from 'native-base'
import {Actions} from 'react-native-router-flux';
import InputSearch from "./InputSearch.js";
import Slider from './Slider.js';
import Order from './Order.js';
import NavBar from './NavBar.js';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as Ac from "./reducers/Actions.js";
import Menu from "./SideMenu.js"
const SideMenu = require('react-native-side-menu');
function mapStateToProps(state){
  return {DATA:state.Items}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
class Ground extends Component {
  render(){
    return(
      <Container style={{backgroundColor:"#FFF"}}>
        <NavBar />
        <InputSearch />
        <Slider />
        <Order />
      </Container>
    );
  }
}
export class Home extends Component{
  render() {
    const menu = <Menu />;

    return (
      <SideMenu menu={menu} isOpen={this.props.DATA.isOpenMenu}>
        <Ground />
      </SideMenu>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
