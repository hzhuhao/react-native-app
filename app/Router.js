/**
 * Created by Rabbit on 2017/11/3.
 */

import React from 'react';
import { StyleSheet, Text, View, BackHandler, StatusBar, DeviceEventEmitter } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import { Theme } from 'teaset';

import TabIcon from './Component/TabIcon';
// import TabMiddleIcon from './Component/TabMiddleIcon'

import Current from './Pages/Current/Current';

import Detail from './Pages/Current/Detail';
import History from './Pages/History/History';
import Login from './Pages/Login/Login';

import Btn from './Pages/Current/Component/Btn';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        // console.log('ACTION:',action,Actions.currentScene)
        // console.log('Actions:', Actions);
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: Theme.backgroundColor,
    // shadowOpacity: 1,
    // shadowRadius: 3,
});

const onBackPress = () => {
    if(Android) {
        return false;
    }else {
        return true;
    }
}

const router = (...props) => (
    <Router createReducer={reducerCreate}
            getSceneStyle={getSceneStyle}
            backAndroidHandler={onBackPress}
    >

        <Modal
            hideNavBar
            transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
        >
            <Stack hideNavBar headerMode='screen' key="root">

                <Scene
                    title='登录'
                    key="LoginModal"
                    component={Login}
                    gesturesEnabled={false}
                    hideNavBar
                />
                <Tabs
                    key="tabbar"        // 唯一标识
                    wrap={true}         // 自动使用自己的导航栏包装每个场景
                    showLabel={false}   // 显示文字
                    tabBarStyle={styles.tabBarStyle} // tabBar的样式
                    swipeEnabled={false}// 是否可以滑动
                    headerMode='screen' // 页面切换方式
                    icon={TabIcon}      // 自定义Icon显示方式
                    lazy={true}         // 是否默认渲染tabbar
                    tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
                    activeBackgroundColor='white'   // 选中tabbar的背景色
                    inactiveBackgroundColor='white' // 未选中tabbar的背景色
                    activeTintColor='#4ECBFC'       // 选中tabbar图标的颜色
                    inactiveTintColor='#aaa'        // 未选中tabbar图标的颜色
                >
                    <Stack key="Current"
                           title={'首页'}
                           image={Images.ShiTu}
                           selectedImage={Images.ShiTu}
                    >
                        <Scene back={false} titleStyle={{ alignSelf:'center'}} component={Current} key="Current_key"/>
                    </Stack>
                    <Stack key='History'
                           title={'历史'}
                           image={Images.Gank}
                           selectedImage={Images.Gank}
                    >
                        <Scene titleStyle={{ alignSelf:'center'}} component={History} key="History_key"/>
                    </Stack>
                    <Stack key='Main'
                           title={'我的'}
                           image={Images.Main}
                           selectedImage={Images.Main}
                    >
                        <Scene titleStyle={{ alignSelf:'center'}} component={History} key="Main_key"/>
                    </Stack>
                </Tabs>

                <Stack key="historyDetail"
                title={'详情'}
                >
                <Scene back={true} titleStyle={{ alignSelf:'center'}} renderRightButton={Btn}   title="详情" component={Detail} key="historyDetail_1"/>
                </Stack>

            </Stack>

        </Modal>
    </Router>
);

export default router;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#eee',
        height:49,
    },
});