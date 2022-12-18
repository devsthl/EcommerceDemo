import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import AppConstants from '../../../../../base/AppConstants';
import Styles from '../../../../../base/Styles';
import Images from '../../../../../assets/images/Images';
import HeaderChild from '../../../../../components/HeaderChild';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const CheckOutScreen = ({ route }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true);
    const [loadingCheckout, setLoadingCheckout] = useState(false);

    const dataCard = [
        {
            id: AppConstants.PAYMENT_TYPE.COD,
            name: 'Cash On Delivery',
            canSelect: true,
            icon: Images.iconMony
        },
        {
            id: AppConstants.PAYMENT_TYPE.CREDIT_CARD,
            name: 'Shipping A Credit Card',
            canSelect: true,
            icon: Images.iconMatter
        }
    ]
    const dataDef = [
        {
            type: AppConstants.CheckoutType.ADDRESS,
        },
        {
            type: AppConstants.CheckoutType.LIST_PRODUCT,
        },
        {
            type: AppConstants.CheckoutType.PAYMENT,
        },
        {
            type: AppConstants.CheckoutType.VOUCHER,
        },
        {
            type: AppConstants.CheckoutType.INFO_PAYMENT,
        },
    ]
    const renderAddress = () => {
        // if (addressList === undefined || addressList.message === 'error') {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('createAddress', {
                    item: route.params?.item
                })
            }}>
                <Text>Do not Address, please add your address</Text>
            </TouchableOpacity>
        )
        // }

    }
    const renderItem = ({ item }) => {
        switch (item.type) {
            case AppConstants.CheckoutType.ADDRESS:
                return renderAddress();
            default:
                return null;
            // break;
        }
    }
    return (
        <HeaderChild title={'Check Out'}>
            <FlatList
                data={dataDef}
                // showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            // renderItem={({item})=>renderItem(item)}
            />
        </HeaderChild>
    )
}

export default CheckOutScreen