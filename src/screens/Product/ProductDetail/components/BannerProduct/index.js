import { View, Text, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-banner-carousel';
import Animated from 'react-native-reanimated';
import Constants from '../../../../../common/constants/Constants';
const BannerWidth = Dimensions.get('window').width
const BannerHeight = (BannerWidth * 2.5) / 5
const BannerProduct = ({
    item,
}) => {
    const [animatePress, setAnimatePress] = useState(new Animated.Value(1))
    const animateIn = () => {
        Animated.timing(animatePress, {
            toValue: 0.5,
            duration: 500,
            useNativeDriver: true // Add This line
        }).start();
    }
    const [index, setIndex] = useState(0);
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
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
        }}>
            <Carousel
                autoplay
                autoplayTimeout={3000}
                loop
                showsPageIndicator={true}
                index={index}
                onPageChanged={i => {
                    setIndex(i)
                }}
                pageSize={BannerWidth}>
                {item.imageUrl.map((image, index) => {
                    return (
                        <View
                            style={{
                                flex: 1,
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                            }}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: 150,
                                }}
                                source={{
                                    uri: getImageUrl(item.imageUrl)
                                }}
                                resizeMode='contain' />
                        </View>
                    )
                })}
            </Carousel>
            <View
                style={{
                    backgroundColor: 'red',
                    width: 50,
                    backgroundColor: 'rgba(51, 51, 51, 0.65)',
                    flexDirection: 'row',
                    borderRadius: 10,
                    justifyContent: "center",
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    alignItems: 'center'
                }}>
                <Text>
                    {index + 1}/{item.imageUrl.length}
                </Text>
            </View>
        </View >
    )
}

export default BannerProduct