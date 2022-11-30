import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import { useDispatch } from 'react-redux'
import { getAllEvents } from '../../../store/Events/eventSlice'
import AppConstants from '../../../base/AppConstants'
import EventsRow from '../../Event'
import { FlatList } from 'react-native-gesture-handler'
const HomePresentation = () => {
    const [data, setData] = useState([]);
    const defaultData = [
        {
            type: AppConstants.homeItemType.BANNER,
        },
        {
            type: AppConstants.homeItemType.PRODUCT_MENU,
        },
        {
            type: AppConstants.homeItemType.FIELD,
        },
        {
            type: AppConstants.homeItemType.COURSE,
        },
        {
            type: AppConstants.homeItemType.NEWS,
        },
        {
            type: AppConstants.homeItemType.EVENT,
        },
        {
            type: AppConstants.homeItemType.PRODUCT_BEST_SELLING,
        },
        {
            type: AppConstants.homeItemType.TITLE_SUGGEST,
        },
    ];

    const renderItem = ({ item }) => {
        switch (item.type) {
            case AppConstants.homeItemType.PRODUCT_MENU:
                return <EventsRow />
            case AppConstants.homeItemType.EVENT:
                return <EventsRow />

            default:
                return null;
        }
    }
    return (
        <View style={styles.wrapper}>
            <View>
                <Header title={'HOME'} />
            </View>
            <View>
                <FlatList
                    data={defaultData}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    // refreshing={refreshing}
                    renderItem={renderItem}
                    ListFooterComponent={() => {
                        return (
                            <View>
                                <Text></Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})
export default HomePresentation