import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react';
import AppConstants from '../../../../../base/AppConstants';
import Styles from '../../../../../base/Styles';
import Images from '../../../../../assets/images/Images';
import HeaderChild from '../../../../../components/HeaderChild';
const CheckOutScreen = ({ route }) => {
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
        return (
            <View>
                <Text>123</Text>
            </View>
        )
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