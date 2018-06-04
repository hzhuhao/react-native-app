import React, {Component} from 'react'
import {View, StyleSheet, Text, Platform} from 'react-native'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
        }
    }
    componentDidMount() {
        console.log(this.props.id);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.detailBox}>
                    <View style={styles.title}>
                        <Text style={{  fontSize: FONT_SIZE(20),color:'#000' }}>报告内容标题</Text>
                    </View>
                    <View style={styles.boxCotent}>
                        <Text style={{  fontSize: FONT_SIZE(14),color:'#000' }}>提交风险鉴定报告内容详情</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{  fontSize: FONT_SIZE(14),color:'#0059F1' }}>2018年5月20日</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
    },
    detailBox: {
        fontSize: 18,
        height:px2dp(450),
        marginLeft:px2dp(15),
        marginRight:px2dp(15),
        marginTop:px2dp(15),
        borderWidth:1,
        borderColor:'#DBDBDB',
        position:'relative'
    },
    title:{
        height:60,
        borderBottomWidth:1,
        borderBottomColor:'#DBDBDB',
        justifyContent:'center',
        paddingLeft:22,
        paddingRight:22
    },
    boxCotent:{
        paddingTop:10,
        paddingLeft:22,
        paddingRight:22
    },
    footer:{
        position:'absolute',
        bottom:0,
        paddingLeft:22,
        marginBottom:10
    }
});

export default Detail