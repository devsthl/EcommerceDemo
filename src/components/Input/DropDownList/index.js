import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Colors from '../../../assets/colors/Colors'
import Ionicon from 'react-native-vector-icons/Ionicons'
import AppConstants from '../../../base/AppConstants'
import icon from '../../../base/icon'
const DropDown = ({
    title,
    require = true,
    list,
    onSelectedItem,
    containerStyle,
}) => {
    const [itemPicked, setItemPicked] = useState(list[0] ?? '');
    const [isShowList, setIsShowList] = useState(false);
    return (
        <View style={{ minHeight: 84 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {require && <Text style={{ color: Colors.primary_color }}>*</Text>}
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={[styles.container, containerStyle]}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomWidth: isShowList ? 1 : 0,
                        borderBottomColor: Colors.borderColor,
                        paddingBottom: isShowList ? 5 : 0
                    }}>
                    <Text style={styles.text}>{`${itemPicked}`}</Text>
                    <Pressable
                        onPress={() => setIsShowList(!isShowList)}
                        style={{ padding: 3, }}>
                        <Ionicon name={icon.chevron_down} size={15} color={Colors.gray} />
                    </Pressable>
                </View>
                {isShowList && (
                    <View>
                        {list.map(item => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setItemPicked(item);
                                        if (onSelectedItem) onSelectedItem(item);
                                    }}
                                    key={item}>
                                    <Text
                                        style={{
                                            color: itemPicked === item ? Colors.black : Colors.gray,
                                            paddingVertical: 3,
                                        }}>
                                        {`${item}`}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                )}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        padding: 10,
        marginTop: 5,
        color: Colors.black,
    },
    container: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        paddingVertical: AppConstants.IS_IOS ? 8 : 10,
        paddingLeft: 10,
        paddingRight: 5,
        marginHorizontal: 5,
        backgroundColor: Colors.white,
    },
    item: {
        width: '100%',
    },
    text: {
        color: Colors.black,
    },
});
export default DropDown