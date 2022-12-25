import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
import AppConstants from '../../../../../base/AppConstants';
import Styles from '../../../../../base/Styles';
import Images from '../../../../../assets/images/Images';
import HeaderChild from '../../../../../components/HeaderChild';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getAllAddress } from '../../../../../store/Address/AddressSlice';
import Colors from '../../../../../assets/colors/Colors';
import { getStoreById } from '../../../../../store/Store/storeSlice';
import { CartAPI } from '../../../../../api/cart/CartAPI';
const X = Styles.constants.X
const CheckOutScreen = ({ route }) => {
    //usenavigation, dispatch
    const dispatch = useDispatch()
    const navigation = useNavigation()
    //field
    const [dataAddress, setDataAddress] = useState()
    const [dataStore, setDataStore] = useState()
    const [loading, setLoading] = useState(true);
    const [loadingCheckout, setLoadingCheckout] = useState(false);
    const [countPrice, setCountPrice] = useState();
    //redux store
    const { addressList } = useSelector((state) => state.addressReducer)
    const { storeById } = useSelector((state) => state.storeReducer)

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
    useEffect(() => {
        dispatch(getAllAddress())
        dispatch(getStoreById(route.params.item.store.id))
    }, [])

    const renderAddress = () => {
        if (addressList === undefined || addressList.message === 'error') {
            return (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('createAddress', {
                        item: route.params?.item,
                        onChangeAdress: (newAddress) => {
                            setAddress(newAddress)
                        }
                    })
                }}>
                    <Text>Do not Address, please add your address</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <View style={styles.bodyView}>
                    <Text style={styles.text1}>Shipping Address</Text>
                    <TouchableOpacity style={styles.touch2}>
                        <Text style={styles.text2}>
                            {addressList[0]?.name} | {addressList[0]?.phone}
                        </Text>
                        <Text style={styles.text3}>
                            {addressList[0]?.addressDetail.address}
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

    }
    const renderListProduct = () => {
        getCountPrice()
    }
    const getCountPrice = async () => {
        let data = addressList[0]?.addressDetail
        let product = route.params.product[0]
        let products = [{
            height: product.height,
            id: product.id,
            id_order_detail: product.idOrderDetail,
            id_order_detail: product.idOrderDetail,
            length: product.length,
            name: product.name,
            price: product.price,
            quantity: 1,
            quantity_in_stock: product.quantityInStock,
            width: product.width,
            weight: product.weight
        }]
        let params = {
            ship_unit_id: storeById.shipUnitId,
            from_district: storeById.address?.district.ghnId,
            to_district: data?.district.ghnId,
            to_ward_code: data?.ward.ghnId,
            coupon: null,
            products: products
        }
        const res = await CartAPI.getFeesShip(params)
        if (res.code === 0 && res.message === "Success") {
            const body = {
                orders: [
                    {
                        store_id: route.params.item.store.id,
                        products: products,
                        ship_price: res.data[0].total
                    }
                ]
            }
            const resCountPrie = await CartAPI.getCountPrice(body)
            if (resCountPrie.code === 0 && resCountPrie.message === "Success") {
                // setCountPrice(resCountPrie)
                return resCountPrie;
            }
            // console.log("loggggg", countPrice);
        } else {
            console.log("error");
        }
        // console.log('resCountPrie', resCountPrie);

    }
    const renderItem = ({ item }) => {
        switch (item.type) {
            case AppConstants.CheckoutType.ADDRESS:
                return renderAddress();
            case AppConstants.CheckoutType.LIST_PRODUCT:
                return renderListProduct();
            default:
                return null;
            // break;
        }
    }
    return (
        <HeaderChild title={'Check Out'}>
            <FlatList
                data={dataDef}
                renderItem={renderItem}
            />
        </HeaderChild>
    )
}

const styles = StyleSheet.create({
    bodyView: {
        backgroundColor: Colors.tabWhite,
        marginBottom: X / 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: X / 4,
    },
    text1: {
        fontSize: X * 0.57,
        color: Colors.tabBlack,
        fontWeight: '700'
    },
    touch2: {
        backgroundColor: Colors.tabWhite,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 12,
        borderColor: Colors.borderItemHome,
        elevation: 2,
    },
    text2: {
        fontSize: X * 0.31,
        color: Colors.tabBlack,
        fontWeight: '500',
        marginBottom: 6
    },
    text3: {
        fontSize: X * 0.31,
        color: Colors.gray,
    }
})
export default CheckOutScreen