import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeRow from '../HomeRow'
import ItemFullWidth from '../ItemFullWidth/ItemFullWidth'
import dataUltils from '../../../../../data/dataUltils'
import DateUtils from '../../../../../utils/DateUtils'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import Styles from '../../../../../base/Styles'
import Constants from '../../../../../common/constants/Constants'
import { useSelector } from 'react-redux'
import { getAllEvents } from '../../../../../store/Events/eventSlice'
const EventsRow = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const { eventList } = useSelector((state) => state.eventReducer)
    useEffect(() => {
        if (dispatch(getAllEvents({
            type: 3
        }))) {
            setData(eventList)
            setLoading(false)
        }
    }, [data])
    // console.log("image:", eventList.imageUrl);
    const checkImage = (arrImage) => {
        if (arrImage === null) return null;
        else return Constants.baseURL + arrImage[0]?.url;
    };
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
                navigation.navigate('Login')
            }}
        />
    );
    return (
        <HomeRow
            data={eventList?.data}
            loading={loading}
            title={'Events'}
            setLoading={setLoading}
            renderItem={_renderItem}
            onPressMore={() => {
                navigation.navigate('Login')
            }}
        />

    )
}

export default EventsRow