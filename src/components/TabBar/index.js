import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native'
import Colors from '../../assets/colors/Colors'
import Styles from '../../base/Styles'


const TabBar = ({
    tabStyle,
    titleStyle,
    listTitle,
    tabIndex,
    setIndex,
    activeTabColorText,
    releaseTabColorText,
    decorationColor,
}) => {
    const renderItem = (({ item, index }) => {
        console.log(item, index);
        return (
            <TouchableOpacity
                onPress={() => setIndex(index)}
                style={[styles.tab, tabStyle,]}>
                <View
                    style={{
                        borderBottomWidth: tabIndex === index ? 2 : 0,
                        borderBottomColor: decorationColor ? decorationColor : Colors.blue,
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                    <Text
                        numberOfLines={1}
                        style={[{
                            color:
                                tabIndex === index
                                    ? activeTabColorText
                                        ? activeTabColorText
                                        : Colors.blue
                                    : releaseTabColorText
                                        ? releaseTabColorText
                                        : Colors.unTouchText,
                            fontSize: 15,
                        }, titleStyle
                        ]}>
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity >
        )
    })
    return (
        <View>
            <FlatList
                style={[styles.container]}
                data={listTitle}
                renderItem={renderItem}
                horizontal={true}
                keyExtractor={item => `${item.title}${item.id}`} />
            {renderItem}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Styles.constants.widthScreen,
        // backgroundColor: Colors.red
    },
    tab: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
});
export default TabBar;