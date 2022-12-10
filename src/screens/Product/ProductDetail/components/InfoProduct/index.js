import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../../../assets/colors/Colors';
import CurrencyFormatter from '../../../../../utils/Formatter';
import Styles from '../../../../../base/Styles';
// import HTMLView from "react-native-htmlview";

let X = Styles.constants.X
const InfoProduct = ({ item }) => {
    const renderRow = (title, des) => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                display: des === undefined ? 'none' : 'flex',
                borderWidth: 1,
                borderColor: Colors.gray,
                justifyContent: 'space-between',
                width: Styles.constants.widthScreenMg24
            }}>
                <Text style={{
                    width: (Styles.constants.widthScreenMg24 / 2) - 10, fontSize: 14,
                    color: Colors.tabBlack, padding: 5
                }}>{title}</Text>
                <View style={{
                    width: 1, height: '100%',
                    backgroundColor: Colors.gray
                }} />
                <Text style={{
                    width: (Styles.constants.widthScreenMg24 / 2) - 10,
                    fontSize: 14, color: Colors.tabBlack, padding: 5
                }}>{des}</Text>
            </View>
        )
    }
    return (
        <View>
            <View style={styles.itemRow}>
                <Text style={styles.textName}>
                    {item.name}
                </Text>
            </View>
            <View style={{ marginHorizontal: Styles.constants.X * 0.6, marginTop: 8 }}>
                <Text style={styles.price}>
                    {CurrencyFormatter(item.price)}
                </Text>
                <View style={{ width: Styles.constants.widthScreenMg24 }}>
                    <View style={{
                        backgroundColor: Colors.bgButtonFal,
                        width: Styles.constants.widthScreenMg24
                    }}>
                        <Text
                            style={{
                                fontWeight: '500',
                                fontSize: 16,
                                color: Colors.tabWhite
                            }}>Description</Text>
                    </View>
                    {renderRow('Product Name: ', item.name)}
                    {renderRow('Stock: ', item.quantity)}
                    {renderRow(item.property)}
                    {renderRow(item.features)}
                </View>
                <View style={{
                    marginVertical: 20,
                    display: item.content === undefined ? 'none' : 'flex'
                }}>
                    <Text>Contents: {item.content}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: X * 0.6,
        marginTop: X * 0.38,
    },
    textName: {
        fontSize: X * 0.43,
        fontWeight: '700',
        maxWidth: '100%',
        lineHeight: 21,
    },
    price: {
        ...Styles.text24,
        color: Colors.tabActive,
        fontWeight: '700',
        marginVertical: 10
    }
})
export default InfoProduct