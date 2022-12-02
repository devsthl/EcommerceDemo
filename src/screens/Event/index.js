import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeRow from '../main/home/component/HomeRow'
import ItemFullWidth from '../main/home/component/ItemFullWidth/ItemFullWidth'
import dataUltils from '../../data/dataUltils'
import DateUtils from '../../utils/DateUtils'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import Styles from '../../base/Styles'
import Constants from '../../common/constants/Constants'
import { useSelector } from 'react-redux'
import { getAllEvents } from '../../store/Events/eventSlice'
const EventsRow = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const { eventList } = useSelector((state) => state.eventReducer)
    useEffect(() => {
        if (dispatch(getAllEvents())) {
            setData(eventList)
            setLoading(false)
        }
    }, [])
    // console.log('event:', eventList.data);

    const _renderItem = ({ item, index }) => (
        <ItemFullWidth
            item={item}
            title={item.name}
            image={item.imageUrl}
            des={
                <View>
                    <Text style={[Styles.text14, { color: '#000' }]} numberOfLines={1}>
                        Ngày: {DateUtils.formatDate('DD/MM/YYYY', item.start_date)}
                    </Text>
                    <Text style={[Styles.text14, { color: '#000' }]} numberOfLines={1}>
                        Thời gian: {DateUtils.formatDate('hh:mm', item.start_date)}
                    </Text>
                    <Text style={[Styles.text14, { color: '#000' }]} numberOfLines={2}>
                        Tại: {item.address}
                    </Text>
                </View>
            }
            index={index}
            onClick={() => {
                navigation.navigate('EventsDetail', {
                    item: item
                })
            }}
        />
    );
    return (
        <HomeRow
            data={eventList.data}
            loading={loading}
            title={'Events'}
            setLoading={setLoading}
            renderItem={_renderItem}
            onPressMore={() => {
                navigation.navigate('ListEvents')
            }}
        />

    )
}

export default EventsRow