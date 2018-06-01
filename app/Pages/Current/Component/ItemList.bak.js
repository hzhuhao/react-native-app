import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    View,
    RefreshControl,
} from 'react-native';


class List extends React.Component{
    render(){
        return (
            <View style={styles.row}>
                <Text style={styles.text}>
                    {this.props.data.text}
                </Text>
            </View>
        );
    }
};


export default class ItemList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(10)).map(
                (val, i) => ({text: '初次加载的数据行 ' + i})),
        };
    }

    render() {
        var rows = this.state.rowData.map((row, indexKey) => {
            return <List key={indexKey} data={row}/>;
        });
        return (
            <ScrollView
                style={styles.scrollview} refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
                    tintColor='red'
                    title= {this.state.isRefreshing? '刷新中....':'下拉刷新'}
                />
            }>
                {rows}
            </ScrollView>
        );
    }
    onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // 准备下拉刷新的5条数据
            var rowNewData = Array.from(new Array(5))
                .map((val, i) => ({
                    text: '下拉刷新增加的数据行 ' + (+this.state.loaded + i)
                }))
                .concat(this.state.rowData);
            this.setState({
                loaded: this.state.loaded + 5,
                isRefreshing: false,
                rowData: rowNewData,
            });
        }, 2000);
    }

    _toEnd() {
        if (this.state.isRefreshing) return
        this._onRefresh()
    }

    _renderFooter() {
        return (
            <View style={{width, height: 40, backgroundColor: '#FFFFFF', alignItems:'center', justifyContent:'center'}}>
                <Text>正在加载更多...</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    row: {
        borderColor:'green',
        borderWidth:5,
        padding:20,
        backgroundColor:'#3a5795',
        margin:5,
    },
    text:{
        alignSelf:'center',
        color:'white',
    },
    scrollerview:{
        flex:1,
    }
});