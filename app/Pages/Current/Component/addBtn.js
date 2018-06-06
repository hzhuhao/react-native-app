/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

import React, {PureComponent} from 'react'
import {View, Text } from 'react-native'



export default () =>{
    onPressAdd = () => {
        Actions.currentDetail();
    };
    return (
        <View>
            <Text
                style={{ paddingRight:15 }}
                onPress={this.onPressAdd}
            >完成提交</Text>
        </View>
    );
};