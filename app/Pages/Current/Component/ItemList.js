import React, {Component} from 'react'
import {View, StyleSheet, Text, Platform} from 'react-native'
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view'

import Cell from './Cell'
import testData from './data'

import {NavigationPage, ListRow, Label} from 'teaset';

class ItemList extends Component {
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
        this.onPress = this.onPress.bind(this);
    }
    componentDidMount() {
      this.onHeaderRefresh();
    }

    onHeaderRefresh = () => {
        const that = this;
        console.log(this.state.page);
        this.setState({refreshState: RefreshState.HeaderRefreshing});
           // 请求数据
            storage.load({
                key: 'loginUser',
            })
            .then(ret => {
                // 如果找到数据，则在then方法中返回
                console.log(ret);
                const authHeader = getAuthHeader(ret.token);
                axios.get('web/user/queryUserPageList?size=13&page=0',{ ...authHeader })
                    .then(function (response) {
                        console.log(response.data);
                        console.log();
                        //获取数据
                        let dataList = response.data.data;
                        that.setState({
                            dataList: dataList,
                            refreshState: dataList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
                            token:ret.token,
                            total: response.data.pagination.totalCount,
                            page: 1
                        })
                    })
                    .catch(function (error) {
                      //  this.setState({refreshState: RefreshState.Failure})
                        console.log(error);
                        Toast.message(error);
                    });
            })
            .catch(err => {
                // 如果没有找到数据且没有sync方法，
                return '';
            });
    }

    onFooterRefresh = () => {
        const that = this;
        console.log(this.state.page);
        this.setState({refreshState: RefreshState.FooterRefreshing})
        const authHeader = getAuthHeader(this.state.token);
        axios.get('web/user/queryUserPageList?size=13&page='+ that.state.page,{ ...authHeader })
            .then(function (response) {
                console.log(response.data);
                //获取数据
                let newList = [...that.state.dataList, ...response.data.data];
                that.setState({
                    dataList: newList,
                    refreshState: newList.length > that.state.total ? RefreshState.NoMoreData : RefreshState.Idle,
                    page: that.state.page + 1
                })
            })
            .catch(function (error) {
               // this.setState({refreshState: RefreshState.Failure})
                console.log(error);
                Toast.message(error);
            });
    }

    keyExtractor = (item: any, index: number) => {
        return index
    }

    renderCell = (info: Object) => {
        console.log(info);
      //  return <ListRow title={info.item.name} onPress={() => this.onPress(info.item.id)} />
        return  <ListRow
            title={info.item.name}
            style={styles.itemList}
            detail={'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React'}
            onPress={() => this.onPress(info.item.id)}
            titlePlace='top'
            titleStyle={{ color:'#363636',fontSize:FONT_SIZE(19) }}
            detailStyle={{ color:'#9B9B9B',fontSize:FONT_SIZE(14) }}
        />
    }

    onPress = (info) => {
      //  alert(info);
        console.log(info);
        Actions.historyDetail({ 'id': info});
    }
    render() {
        console.log('render scene')
        console.log(Platform.OS);
        return (
            <View style={styles.container}>
                <RefreshListView
                    data={this.state.dataList}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderCell}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.onHeaderRefresh}
                    onFooterRefresh={this.onFooterRefresh}
                    // 可选
                    footerRefreshingText = '玩命加载中 >.<'
                    footerFailureText = '我擦嘞，居然失败了 =.=!'
                    footerNoMoreDataText = '-我是有底线的-'
                    footerEmptyDataText = '-好像什么东西都没有-'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
    },
    title: {
        fontSize: 18,
        textAlign: 'center'
    },
    itemList: {
    }
});

export default ItemList