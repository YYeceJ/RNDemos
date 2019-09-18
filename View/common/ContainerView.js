import React, {Component} from 'react';
import {
    View
} from 'react-native';
import Toast from "react-native-easy-toast";

export default class ContainerView extends Component {
    render() {
        return (
            <View>
                <Toast  //提示
                    ref="toast"
                    style={{backgroundColor:'gray'}}
                    position='center'
                    positionValue={200}
                    opacity={0.6}
                    textStyle={{color:'white'}}
                />
            </View>
        );
    }
}

