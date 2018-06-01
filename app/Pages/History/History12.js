import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions
} from 'react-native';

const dimension = Dimensions.get('window')

export default class Test1 extends Component {

    componentDidMount(){

    }

    _renderSectionHeader(info){

        var txt = '第' + info.section.key + '部分';
        return(
            <View><Text key={info.section.key} style={{width:dimension.width,height:52,textAlign: 'center',backgroundColor:'#21c6cd',color:'#fff'}}>{txt}</Text></View>
        )
    }

    _renderItem(info){

        return(
            <View>
                <Text key={info.item.title}>{info.item.name}</Text>
                <Text>{info.item.phone}</Text>
            </View>
        )
    }
    _separatorCom(){
        return(
            <View style={{height:4,width:500,backgroundColor:'orange'}}></View>
        )
    }
    render() {
        const sections = [];

        for (let i=0;i<10;i++){
            let datas = [];
            for(let j=0;j<10;j++){
                datas.push(
                    {
                        name:'用户'+ i + j,
                        phone:'01234567890'
                    }
                );
            }

            sections.push({key:i,data:datas});

        }
        return (
            <View style={styles.container}>
                <FlatList
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItem}
                    sections={sections}
                    refreshing={false}
                    onRefresh={()=>{alert("刷新")}}
                    ItemSeparatorComponent={this._separatorCom}
                    SectionSeparatorComponent={()=><View style={{height:20,backgroundColor:'blue'}}></View>}
                    keyExtractor={(item,index)=>("index"+index+item)}
                    onEndReached={(info)=>{alert("到达底部")}}
                    onEndReachedThreshold={0}
                    stickySectionHeadersEnabled={true}
                    ListHeaderComponent={()=><View style={{backgroundColor:'yellow',alignItems: 'center'}}><Text>SectionList简易通讯录</Text></View>}
                    ListFooterComponent={()=><View style={{backgroundColor:'red',alignItems: 'center'}}><Text>SectionList简易通讯录尾部</Text></View>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});