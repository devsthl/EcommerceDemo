import { View, Text } from 'react-native'
import React from 'react'
import AppConstants from '../../../base/AppConstants'
import HeaderChild from '../../../components/HeaderChild'
import BannerProduct from './components/BannerProduct'
import { FlatList } from 'react-native-gesture-handler'
import InfoProduct from './components/InfoProduct'
const ProductDetail = ({
    route, item
}) => {
    const defaultData = [
        {
            type: AppConstants.detailItemType.BANNER,
        },
        {
            type: AppConstants.detailItemType.DES_PRODUCT,
        },
        {
            type: AppConstants.detailItemType.STORE_INFO,
        },
        {
            type: AppConstants.detailItemType.PRODUCT_REVIEWS,
        },
        {
            type: AppConstants.detailItemType.OTHER,
        },
        {
            type: AppConstants.detailItemType.TITLE_SUGGEST,
        },
        {
            type: AppConstants.detailItemType.END,
        },
    ]
    const renderItem = ({ item }) => {
        switch (item.type) {
            case AppConstants.detailItemType.BANNER:
                return <BannerProduct item={route.params.item} />
            case AppConstants.detailItemType.DES_PRODUCT:
                return <InfoProduct item={route.params.item} />

            default:
                return null;
        }
    }
    return (
        <HeaderChild title={'Product Detail'}>
            <FlatList
                data={defaultData}
                renderItem={renderItem}
            />
        </HeaderChild>
    )
}

export default ProductDetail