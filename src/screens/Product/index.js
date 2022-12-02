import { View, Text } from 'react-native'
import React from 'react'
import HomeRow from '../main/home/component/HomeRow'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import ItemFullWidth from '../main/home/component/ItemFullWidth/ItemFullWidth'
import { getAllProduct } from '../../store/ProductSlice/productSlice'
import ItemProduct from '../main/home/component/ItemProduct'
import { useNavigation } from '@react-navigation/native'
import { getAllEvents } from '../../store/Events/eventSlice'
import Styles from '../../base/Styles'
import DateUtils from '../../utils/DateUtils'
const Products = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const { eventList } = useSelector((state) => state.eventReducer)
    const { productList } = useSelector((state) => state.productReducer)
    useEffect(() => {
        if (dispatch(getAllEvents())) {
            setData(eventList)
            setLoading(false)
        }
        dispatch(getAllProduct())
    }, [])
    // console.log('event:', eventList.data);

    const _renderItem = ({ item, index }) => (
        <ItemProduct
            item={item}
            total_sold={item.total_sold}
            price={item.price}
            image={item.imageUrl}
            name={item.name}
            index={index}
            onClick={() => {
                navigation.navigate('Login')
            }}
        />
    )
    return (
        <HomeRow
            data={productList.data}
            loading={loading}
            title={'Products'}
            setLoading={setLoading}
            renderItem={_renderItem}
            onPressMore={() => {
                navigation.navigate('ListEvents', {
                    item: item
                })
            }}
        />

    )
}

export default Products;