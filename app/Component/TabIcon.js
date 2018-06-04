import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

const TabIcon = (props) => {
    return(
        <View>
            <Image
                source={!props.focused ? props.image : props.selectedImage}
                style={[{ height:30,width:30,marginTop:12,marginLeft:12,tintColor:props.tintColor }]}
            />
            <Text
                style={{paddingLeft:px2dp(5),color:props.tintColor,marginTop:px2dp(12),fontSize:FONT_SIZE(10)}}
            >
                {props.title}
            </Text>
        </View>
    )
};


export default TabIcon;