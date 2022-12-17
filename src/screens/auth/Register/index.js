import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';

import BaseView from '../../components/BaseView'
import EnterpriseRegister from './EnterpriseRegister';
import PersonalRegister from './PersonalRegister';
import TabBar from '../../../components/TabBar';
import Colors from '../../../assets/colors/Colors';
import Styles from '../../../base/Styles';
const key = {
    enterprise: 'enterprise',
    personal: 'personal',
}

const listTitle = [
    { id: '1', title: 'Persional Register' },
    { id: '0', title: 'Enterprise Register' },
]
const RegisterScreen = () => {
    const [index, setIndex] = useState(0);
    const [routes, setRoute] = useState([
        { key: key.personal, title: 'Persional Register' },
        { key: key.enterprise, title: 'Enterprise Register' },
    ])

    const renderScene = SceneMap({
        personal: PersonalRegister,
        enterprise: EnterpriseRegister,
    })
    const renderTabBar = () => {
        return (
            <TabBar
                activeTabColorText={Colors.blue}
                releaseTabColorText={Colors.unTouchText}
                tabIndex={index}
                setIndex={setIndex}
                listTitle={listTitle}
                tabStyle={{
                    width: Styles.constants.widthScreen / 2
                }}
            />
        )
    }
    return (
        <BaseView>
            <View style={{
                width: Styles.constants.widthScreen,
                // backgroundColor: 'red',
                alignItems: 'flex-end', paddingRight: 20, marginTop: 30
            }}>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Styles.constants.widthScreen }}
                renderTabBar={renderTabBar}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    right: 0,
                }}
            />
        </BaseView>
    )
}

export default RegisterScreen