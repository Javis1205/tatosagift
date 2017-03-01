import React, { Component } from 'react';
import {
  View,
  Dimensions
} from "react-native";
import ImageSlider from 'react-native-image-slider';
const {height, width} = Dimensions.get('window');
export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View>
                <ImageSlider
                    images={[
                        `http://placeimg.com/640/480/any`,
                        `http://placeimg.com/640/480/any`,
                    ]}
                    height={height/3}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/>
            </View>
        );
    }
}
