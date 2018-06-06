import React, {Component} from 'react'
import {View, StyleSheet, Platform} from 'react-native'
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view'

import { Input, ListRow } from 'teaset';

class addRes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            refreshState: RefreshState.Idle,
            token: "",
            page:0,
            size: 13,
            total:null
        };
    }
    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contBox}>
                    <Input
                        size='lg'
                        style={styles.titleInput}
                        placeholder='输入标题'
                    />
                    <Input
                        style={styles.inputText}
                        multiline={true}
                    />
                </View>
                <View>
                    <ListRow title='提交任务报告' style={{ height:50 }} bottomSeparator='indent' icon={require("../../Resources/images/Notice.png")} />
                    <ListRow title='补充风险报告' style={{ height:50 }} bottomSeparator='indent' icon={require("../../Resources/images/Notice.png")} />
                    <ListRow title='提高危险性鉴定报告' style={{ height:50 }} bottomSeparator='indent' icon={require("../../Resources/images/Notice.png")} />
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
    contBox: {
        borderWidth:1,
        borderColor:'#DBDBDB',
        height:px2dp(500),
        marginLeft:px2dp(15),
        marginRight:px2dp(15),
        marginTop:px2dp(15),
    },
    titleInput:{
        borderColor:'#fff',
        borderBottomColor:'#DBDBDB'
    },
    inputText:{
        height:px2dp(400),
        borderColor:'#fff',
    }
});

export default addRes