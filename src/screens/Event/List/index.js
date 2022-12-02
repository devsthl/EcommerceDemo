import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderChild from '../../../components/HeaderChild'
import { getAllEventsWithPag, getAllEvents } from '../../../store/Events/eventSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Styles from '../../../base/Styles'
import Colors from '../../../assets/colors/Colors'
import { ActivityIndicator } from 'react-native'
import ItemFullWidth from '../../main/home/component/ItemFullWidth/ItemFullWidth'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import DateUtils from '../../../utils/DateUtils'
import { useState } from 'react'
const ListEventScreen = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const { eventListWithPag, eventList } = useSelector((state) => state.eventReducer)
    useEffect(() => {
        dispatch(getAllEvents())
        setLoading(false)
    }, [])
    const _renderItem = ({ item, index }) => {
        if (index == 0) {
            return (
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        marginHorizontal: 20,
                        borderRadius: 8,
                        backgroundColor: '#25AAE1',
                        alignItems: 'center',
                        marginVertical: 20,
                    }}
                    activeOpacity={0.5}>
                    <Text
                        style={[
                            Styles.text15,
                            { color: Colors.tabWhite, fontWeight: '600' },
                        ]}>
                        Search
                    </Text>
                </TouchableOpacity>
            );
        } else
            return (
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

            )

    };
    return (
        <HeaderChild title={'Events List'}>
            <FlatList
                data={eventList?.data}
                renderItem={_renderItem}
                ListFooterComponent={
                    <ActivityIndicator animating={loading} size="large" color="#00ff00" />
                }
            />
        </HeaderChild>
    )
}

export default ListEventScreen