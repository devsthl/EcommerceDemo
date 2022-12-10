import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../../../../../base/Styles'
import Colors from '../../../../../assets/colors/Colors'
import Constants from '../../../../../common/constants/Constants'
import ProductUtils from '../../../../../utils/ProductUtils'
import { useNavigation } from '@react-navigation/native'
const StoreRow = ({ item }) => {
    const navigation = useNavigation()
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
    return (
        <View style={styles.view1}>
            <TouchableOpacity onPress={() => { navigation.navigate('StoreId', { item: item }) }}>
                <Text style={styles.txt1}>Store:</Text>
                <View style={{
                    // backgroundColor: 'red',
                    flexDirection: 'row',
                    alignContent: 'center',
                    paddingLeft: 30,
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flex: 1
                    }}>
                        <Image style={styles.image}
                            source={
                                ProductUtils.getStoreAvatar(item.avatar, item.id)
                            } />
                    </View>
                    <View style={{ flex: 5 }}>
                        <Text style={styles.txt1}>{item.name}</Text>
                        <View>
                            <Text>{item.product_quantity}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    view1: {
        paddingHorizontal: Styles.constants.X * 0.6,
        marginTop: Styles.constants.X * 0.3,
        backgroundColor: Colors.colorPersonal
    },
    image: {
        width: Styles.constants.X * 0.7,
        height: Styles.constants.X * 0.7,
        alignSelf: 'center',
    },
    txt1: {
        fontSize: Styles.constants.X * 0.31,
        color: Colors.tabBlack,
        fontWeight: '700',
        maxWidth: '80%',
        lineHeight: 21,
    }
})
export default StoreRow