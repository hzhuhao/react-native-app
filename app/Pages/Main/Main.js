import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Button,Toast } from 'teaset';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:''
        };
        this.loginOut = this.loginOut.bind(this);
    }
    componentDidMount() {
            // 请求数据
            storage.load({
                key: 'loginUser',
            })
            .then(ret => {
                // 如果找到数据，则在then方法中返回
                console.log(ret.data.userName);
                this.setState({
                    username:ret.data.userName
                });
            })
            .catch(err => {
                // 如果没有找到数据且没有sync方法，
                return '';
            });
    }
    // 退出登陆
    loginOut = () => {
        storage.remove({
            key: 'loginUser'
        });
        Toast.message('退出成功!');
        Actions.LoginModal();
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userInfo}>
                    <View style={styles.welcome}>
                        <Text style={{ fontSize:FONT_SIZE(18),color: '#363636'}}>欢迎使用！</Text>
                    </View>
                    <View style={styles.welcome}>
                        <Text style={{ fontSize:FONT_SIZE(32),color: '#363636'}}>{this.state.username}</Text>
                    </View>
                </View>
                <View style={styles.loginBtn}>
                    <Button style={styles.loginOut} onPress={this.loginOut}  size="lg" title="退出"></Button>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    userInfo:{
        backgroundColor:'#FFF',
        height:px2dp(260),
        shadowColor:'#0059F1',
        shadowOffset:{h:10,w:10},
        shadowOpacity:0.2,
    },
    welcome:{
        marginLeft:48,
        marginTop:20
    },
    loginBtn:{
        flex:1,
        marginTop:px2dp(260),
        justifyContent:'center',
        backgroundColor: '#FFF',
    },
    loginOut:{
        marginLeft:50,
        marginRight:50,
        height:60,
        borderRadius:px2dp(40),
        backgroundColor: '#FFF',
        borderColor:'#0352DB',
        shadowOffset:{h:10,w:10},
        shadowOpacity:0.2,
    }
});