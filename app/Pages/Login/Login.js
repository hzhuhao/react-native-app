import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

import { Button, Input, Toast } from 'teaset';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile:"",
            password:""
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        style={styles.logoImage}
                        source={require("../../Resources/images/logo.png")}
                    />
                </View>
                <View style={styles.loginViewStyle}>
                    <Input
                        style={styles.InputItem}
                        size="lg"
                        placeholder="请输入手机号"
                        value={this.state.mobile}
                        onChangeText={text => this.setState({mobile: text})}
                    />
                    <Input
                        style={styles.InputItem}
                        size="lg"
                        placeholder="请输入密码"
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={text => this.setState({password: text})}
                    />
                </View>
                <Button title={'登录'}
                        style={styles.loginButtonStyle}
                        titleStyle={{fontSize:FONT_SIZE(14), color:'#fff'}}
                        onPress={this.onSubmit}
                />
            </View>
        );
    }
    onSubmit = ()=>{
        if(!this.state.mobile){
            Toast.message('手机号不能为空!');
            return false;
        }
        if(!this.state.password){
            Toast.message('密码不能为空!');
            return false;
        }
        axios.post('web/login', {
            name: this.state.mobile,
            password: this.state.password
        })
        .then(function (response) {
            console.log(response.data.data);
             storage.save({ key: 'loginUser', data: {
                 data:response.data.data,
                 token:response.data.data.token
             } });
        })
        .then(() => {
            Actions.tabbar();
        })
        .catch(function (error) {
            console.log(error);
            Toast.message(error);
        });

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F9F9F9',
    },
    loginViewStyle:{
        marginTop:px2dp(20)
    },
    InputItem:{
        marginLeft:px2dp(108),
        marginRight:px2dp(108),
        marginBottom:px2dp(30),
    },
    loginButtonStyle:{
        marginLeft:px2dp(108),
        marginRight:px2dp(108),
        height:px2dp(80),
        marginTop:px2dp(142),
        backgroundColor:'#ff7000',
        borderColor:Theme.transparentColor,
        borderRadius:20
    },
    logo:{
        marginTop:px2dp(80),
        marginBottom:px2dp(70),
        alignItems: 'center',
    },
    logoImage:{
        height:px2dp(250),
        width:px2dp(250),
    }
});