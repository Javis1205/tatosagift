import React, { Component } from 'react';
import {
  View,
} from "react-native";
import { Container, Content, Item, Input, Icon } from 'native-base';
export default class InputSearch extends Component {
  render(){
    return(
          <View style={{marginTop:5,marginRight:2,height:55}}>
            <Content >
                <Item rounded>
                    <Icon active name='search' />
                    <Input placeholder='Tìm kiếm sản phẩm của bạn ...'/>
                </Item>
            </Content>
          </View>
    );
  }
}
