import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple'
import Styles from '../../../../../base/Styles'
import Colors from '../../../../../assets/colors/Colors'
import AppConstants from '../../../../../base/AppConstants'
import Constants from '../../../../../common/constants/Constants'
const itemWidth = Styles.constants.widthScreen - 60;
const itemHeight = (itemWidth * 10) / 21;
const imageWidth = (itemWidth * 10) / 27;
const viewWidth = (itemWidth * 10) / 19;
const ItemFullWidth = ({ item, index, title, image, onClick, des }) => {
    const getImageUrl = images => {
        if (images != undefined && images != null && images.length > 0) {
            return Constants.baseURL + images[0].url;
        }
        else if (typeof images === 'string' && images !== '') {
            return Constants.baseURL + images;
        } else {
            return 'https://picsum.photos/130/214?' + index;
        }
    };
    return (
        <Ripple style={styles.ripple}
            onPress={() => {
                if (onClick) {
                    onClick(item)
                }
            }}>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{
                    uri: getImageUrl(image)
                }}
            />
            <View style={styles.view} >
                <Text>
                    {title}
                </Text>
                {
                    des
                        ? typeof des === 'string'
                            ? <Text>{des}</Text>
                            : des
                        : <View />
                }
            </View>
        </Ripple>
    )
}
const styles = StyleSheet.create({
    ripple: {
        margin: 8,
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.26,
        elevation: 2,
        width: itemWidth,
        // width: 350,
        height: itemHeight,
        backgroundColor: Colors.tabWhite,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 18,
    },
    image: {
        width: imageWidth,
        height: imageWidth,
        backgroundColor: Colors.blue,
        borderRadius: 12,
        overflow: 'hidden',

    },
    text: {
        ...Styles.text16,
        width: '100%',
        fontWeight: '600',
        marginBottom: 10,
        textAlign: 'left',
        color: '#4285F4',
    },
    view: {
        width: viewWidth,
        height: '100%',
        paddingLeft: 10
    }
})
export default ItemFullWidth;