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
        //this.onHeaderRefresh();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>1212</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    title: {
        fontSize: 18,
        height: 84,
        textAlign: 'center'
    }
});

export default Detail