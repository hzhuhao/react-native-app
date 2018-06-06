import React, {Component} from 'react'
import {View, StyleSheet, Text, Platform, Image} from 'react-native'

import {Button, ListRow } from 'teaset';
class CurrentDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
        }
    }
    componentDidMount() {
        console.log(this.props.id);
    }

    addRes = () => {
        Actions.addResources();
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.detailBox}>
                    <View style={styles.title}>
                        <Text style={{  fontSize: FONT_SIZE(20),color:'#000' }}>报告内容标题</Text>
                    </View>
                    <View style={styles.boxCotent}>
                        {/*<Text style={{  fontSize: FONT_SIZE(14),color:'#000' }}>提交风险鉴定报告内容详情</Text>*/}
                        <Image
                            style={styles.logoImage}
                            source={require("../../Resources/images/pdfimg.jpeg")}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={{  fontSize: FONT_SIZE(14),color:'#0059F1' }}>2018年5月20日</Text>
                    </View>
                </View>
                <View style={styles.toolBar}>
                   <View style={styles.toolLeft}>
                       <Text style={{  fontSize: FONT_SIZE(14),color:'#000' }}>已添加报告</Text>
                   </View>
                    <View style={styles.toolRight}>
                        <Button title='新增' style={{ backgroundColor:'#0059F1',height:40 }} type='primary'  onPress={this.addRes} />
                    </View>
                </View>
                <View style={styles.itemList}>
                    <ListRow title='提交任务报告' style={{ height:50 }} bottomSeparator='indent' icon={require("../../Resources/images/Notice.png")} />
                    <ListRow title='补充风险报告' style={{ height:50 }} bottomSeparator='indent' icon={require("../../Resources/images/Notice.png")} />
                    <ListRow title='提高危险性鉴定报告' style={{ height:50 }} bottomSeparator='indent' icon={require("../../Resources/images/Notice.png")} />
                </View>
                <View style={styles.submitBtn}>
                    <Button
                        title={'结案'}
                        type="primary"
                        style={{
                            height:85,
                            width:85,
                            borderRadius:85,
                            backgroundColor:'#0059F1',
                            shadowColor:'#0059F1',
                            shadowOffset:{ width:10,height:10 },
                            shadowOpacity:0.1,
                            shadowRadius:5,
                        }}
                        titleStyle={{ fontSize:FONT_SIZE(22) }}
                    />
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
        height:px2dp(500),
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
        bottom:0,
        position:'absolute',
        paddingLeft:22,
        marginBottom:10
    },
    toolBar:{
        height:50,
        marginTop:10,
        position:'relative'
    },
    toolLeft:{
        marginTop:15,
        paddingLeft:px2dp(15),
    },
    toolRight:{
        width:100,
        position:'absolute',
        right:px2dp(15),
        top:5
    },
    itemList:{
        backgroundColor:'red'
    },
    submitBtn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});

export default CurrentDetail