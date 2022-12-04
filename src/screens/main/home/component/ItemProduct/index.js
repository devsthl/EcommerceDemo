import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple'
import Styles from '../../../../../base/Styles'
import Colors from '../../../../../assets/colors/Colors'
import CurrencyFormatter from '../../../../../utils/Formatter'
import Constants from '../../../../../common/constants/Constants'
import ProductUtils from '../../../../../utils/ProductUtils'
import AppConstants from '../../../../../base/AppConstants'

const itemWidth = Styles.constants.widthScreen - 60
const imageWidth = (itemWidth * 10) / 27;
const ItemProduct = ({
    item, image, onClick, name, price, total_sold, index
}) => {
    const getImageUrl = (images) => {
        if (images != undefined && images != null && images.length > 0) {
            return Constants.baseURL + images[0].url;
        }
        else if (typeof images === 'string' && images !== '') {
            return Constants.baseURL + images;
        } else {
            return 'https://picsum.photos/130/214?' + index;
        }
    }
    const getItemWidth = () => {
        if (itemWidth === null) {
            return AppConstants.defaultItemWidth
        } else {
            return itemWidth
        }
    }
    const lastprice = () => {
        return price * ((100 - ProductUtils.getPercent(item)) / 100)
    }
    return (
        <Ripple style={[styles.ripple, { width: getItemWidth() }]}
            onPress={() => {
                if (onClick) {
                    onClick(item)
                }
            }}>
            <Image style={[styles.images, { width: getItemWidth() }]}
                resizeMode='contain'
                source={{
                    uri: getImageUrl(image)
                }}
            />
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.text1}
                    numberOfLines={2}
                    ellipsizeMode='tail'>
                    {name}
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 5,
                justifyContent: 'space-between',
                padding: 20
            }}>
                <Text style={styles.price}>{CurrencyFormatter(lastprice())}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[Styles.text12, { color: Colors.tabBlack }]}>
                        {
                            total_sold === null
                                ? 0
                                :
                                total_sold
                        } {' '}
                        Sold
                    </Text>
                </View>
            </View>
            <Text
                style={{ marginLeft: 20, marginBottom: 10, color: 'red' }}
            >
                {`-${ProductUtils.getPercent(item)}%`}
            </Text>
        </Ripple>
    )
}
const styles = StyleSheet.create({
    images: {
        overflow: 'hidden',
        marginTop: 10,
        width: imageWidth,
        height: imageWidth
    },
    ripple: {
        margin: 8,
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.26,
        elevation: 2,
        paddingTop: 10,
        backgroundColor: 'white'
    },
    text1: {
        ...Styles.text14,
        width: '100%',
        fontWeight: '600',
        marginTop: 20,
    },
    price: {
        textAlign: 'left',
        color: Colors.tabActive,
        marginVertical: 10,
        fontStyle: 'normal',
        fontWeight: '700',
    },
    percent: {
        width: 50,
        fontSize: 10,
        borderRadius: 45,
        position: 'absolute',
        right: 5,
        top: 5,
        paddingVertical: 3,
        backgroundColor: Colors.tabActive,
        textAlign: 'center',
        display: 'none',
        color: Colors.tabWhite,
    }
})
export default ItemProduct