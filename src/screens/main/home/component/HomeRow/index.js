import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../../../../../base/Styles'
import Colors from '../../../../../assets/colors/Colors'
const X = Styles.constants.X;
const LIMIT = 20;
const HomeRow = ({
    data, loading, renderItem, title, onPressMore
}) => {
    // console.log("render:", data);
    const keyExtractor = (item, index) => `${item.name}${index.toString()}`
    return (
        <View>
            {
                loading ? (
                    <View>
                        <Text>loading...</Text>
                    </View>
                )
                    :
                    (
                        <View style={styles.view1}>
                            <View style={styles.view2}>
                                <Text
                                    style={styles.text1}
                                    numberOfLines={2}>
                                    {title}
                                </Text>
                                <TouchableOpacity onPress={() => { if (onPressMore) onPressMore() }}>
                                    <Text style={styles.text2}>
                                        View More
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                keyExtractor={keyExtractor}
                                style={{ marginTop: 0 }}
                                renderItem={renderItem}
                            />
                        </View>
                    )}
        </View>
    )
}
const styles = StyleSheet.create({
    view1: {
        marginTop: Styles.constants.marginTopAll,
    },
    view2: {
        ...Styles.containerItemHome,
        marginTop: 5,
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text1: {
        ...Styles.text20,
        color: Colors.textTitle24,
        fontWeight: '700',
    },
    text2: {
        ...Styles.text16,
        fontWeight: '700', color: Colors.tabActive
    }
})
export default HomeRow