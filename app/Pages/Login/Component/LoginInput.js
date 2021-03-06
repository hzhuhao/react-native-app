/**
 * Created by Rabbit on 2017/11/3.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { Input } from 'teaset';

const LoginInput = (props) => {


    return(
        <View style={iStyle.inputViewStyle}>
            <Input placeholder={props.placeholder}
                   style={iStyle.inputStyle}
                   secureTextEntry={props.secureTextEntry}
                   onChangeText={props.onChangeText}
                   onFocus={props.onFocus}
                   onBlur={props.onBlur}
                   value={props.value}
            />
        </View>
    )
}

export default LoginInput;

const iStyle = StyleSheet.create({
    inputViewStyle:{
        height:px2dp(88),
        marginTop:px2dp(20),
        // alignItems:'center',
        marginLeft:px2dp(108),
        marginRight:px2dp(108),
        borderBottomColor:'#d1d1d1',
        borderBottomWidth:px2dp(1),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    inputStyle:{
        borderColor:'transparent',
        borderRadius:0,
        height:px2dp(86),
        flex:1,
        backgroundColor:'transparent',
    },
    inputTitleStyle:{
        fontSize:FONT_SIZE(12),
        color:'#333'
    }
});