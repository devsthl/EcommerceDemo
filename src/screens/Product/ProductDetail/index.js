import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppConstants from '../../../base/AppConstants'
import HeaderChild from '../../../components/HeaderChild'
import { FlatList } from 'react-native-gesture-handler'
import InfoProduct from './components/InfoProduct'
import StoreRow from './components/StoreRow'
import Products from '..'
import Styles from '../../../base/Styles'
import Colors from '../../../assets/colors/Colors'
import RBSheet from 'react-native-raw-bottom-sheet'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Constants from '../../../common/constants/Constants'
import CurrencyFormatter from '../../../utils/Formatter'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { CartAPI } from '../../../api/cart/CartAPI'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCart } from '../../../store/Cart/cartSlice'
const ProductDetail = ({
    route, item
}) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const { cartList } = useSelector((state) => state.cartReducer)

    useEffect(() => {
        const fetchdata = async () => {
            let data = route.params.item;
            const body = {
                product_id: data.id,
                quantity: 1,
                store_id: data.store.id,
                price: data.price
            }
            const res = await CartAPI.addCart(body)
        }
        fetchdata()
        dispatch(getAllCart())
    }, [1000])

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
    const getImageUrl = (images, index) => {
        if (images != undefined && images != null && images.length > 0) {
            return Constants.baseURL + images[0].url;
        }
        else if (typeof images === 'string' && images !== '') {
            return Constants.baseURL + images;
        } else {
            return 'https://picsum.photos/130/214?' + index;
        }
    }



    const renderItem = ({ item }) => {
        switch (item.type) {
            // case AppConstants.detailItemType.BANNER:
            //     return <BannerProduct item={route.params.item} />
            case AppConstants.detailItemType.DES_PRODUCT:
                return <InfoProduct item={route.params.item} />
            case AppConstants.detailItemType.STORE_INFO:
                return <StoreRow item={route.params.item.store} />
            case AppConstants.detailItemType.PRODUCT_REVIEWS:
                return <Products />
            case AppConstants.detailItemType.END:
                return <View style={{
                    marginBottom: 20,
                    height: 10
                }} />
            default:
                return null;
        }
    }
    // console.log("carttttt", cartList[0]?.products[0].id);
    const buyProduct = async () => {
        if (cartList) {
            navigation.navigate('CheckOut', {
                product: cartList[0]?.products,
                item: route.params.item
            })
        }
        BuyViewBottom.close()
    }
    const renderBuyView = () => {
        let product = route.params.item
        return (
            <RBSheet
                customStyles={{
                    container: { backgroundColor: '#F9F9F9', overflow: 'hidden' },
                }}
                keyboardAvoidingViewEnabled={false}
                height={Styles.constants.heightScreen / 3 + Styles.constants.X / 2}
                openDuration={150}
                closeDuration={150}
                ref={ref => {
                    BuyViewBottom = ref;
                }}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    padding: Styles.constants.X * 0.47,
                    backgroundColor: Colors.tabWhite
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Image
                            resizeMode='contain'
                            style={{
                                width: Styles.constants.X * 2.5,
                                height: Styles.constants.X * 3
                            }}
                            source={{
                                uri: getImageUrl(product.imageUrl, product.id)
                            }} />
                        <View
                            style={styles.renderByView1}>
                            <Text
                                numberOfLines={2}
                                style={styles.renderByViewText1}>
                                {product.name}
                            </Text>
                            <Text style={styles.renderByViewText2}>
                                {''}{CurrencyFormatter(product.price)}
                            </Text>
                            <Text style={styles.renderByViewText3}>
                                Stock: {product.quantity}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={buyProduct}
                        style={styles.renderByViewBuyNow}>
                        <Text style={styles.renderByViewBuyNowText}>Buy Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => {
                            BuyViewBottom.close()
                        }}>
                        <Ionicon name="close-outline" size={20} />
                    </TouchableOpacity>
                </View>
            </RBSheet >
        )
    }
    const checkBuyView = () => {
        BuyViewBottom.open()
    }
    const renderBottom = () => {
        return (
            <View style={styles.renderBottomView1}>
                <TouchableOpacity
                    style={styles.renderBottomItem}
                    onPress={checkBuyView}>
                    <Fontisto
                        name="shopping-basket-add"
                        size={20}
                        color={Colors.tabWhite}
                    />
                    <Text style={styles.renderBottomText1}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.renderBottomItemBuy}
                    onPress={checkBuyView}>
                    <Text style={styles.renderBottomText2}>Buy</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <HeaderChild title={'Product Detail'}>
            <FlatList
                data={defaultData}
                renderItem={renderItem}
                ListFooterComponent={() => {
                    return (
                        <View>
                        </View>
                    )
                }}
            />
            {renderBottom()}
            {renderBuyView()}
        </HeaderChild>
    )
}
const styles = StyleSheet.create({
    renderBottomView1: {
        width: '100%',
        height: Styles.constants.X * 1.37,
        backgroundColor: 'transform',
        flexDirection: 'row',
    },
    renderBottomItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.itemBottom,
    },
    renderBottomItemBuy: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.tabActive,
    },
    renderBottomText1: {
        color: Colors.tabWhite,
        fontWeight: '400',
        fontSize: Styles.constants.X * 0.23
    },
    renderBottomText2: {
        color: Colors.tabWhite,
        fontWeight: '700',
        fontSize: Styles.constants.X * 0.28
    },
    renderByView1: {
        marginLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        height: Styles.constants.X * 1.9,
    },
    renderByViewText1: {
        fontSize: Styles.constants.X * 0.38,
        color: Colors.tabBlack,
        width: '50%',
        lineHeight: 25
    },
    renderByViewText2: {
        fontSize: Styles.constants.X * 0.23,
        color: Colors.tabActive,
        marginTop: Styles.constants.X / 4,
    },
    renderByViewText3: {
        fontSize: Styles.constants.X * 0.28,
        color: Colors.gray,
        marginTop: Styles.constants.X / 4,
    },
    renderByViewBuyNow: {
        width: Styles.constants.widthScreen - Styles.constants.X * 1.2,
        height: Styles.constants.X,
        alignSelf: 'center',
        marginTop: Styles.constants.X / 4,
        backgroundColor: Colors.tabActive,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    renderByViewBuyNowText: {
        fontSize: Styles.constants.X * 0.38,
        color: Colors.tabWhite,
        fontWeight: '700'
    },
})
export default ProductDetail