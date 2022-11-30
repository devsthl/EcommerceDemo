import { View, Text, FlatList, StyleSheet, Keyboard } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Styles from '../../../../../base/Styles'
import BaseButton from '../../../../../components/button/baseButton'
import Colors from '../../../../../assets/colors/Colors'
import hardData from '../../../../../base/hardData'
import Item from '../Item'
import { validateData } from '../../validate'
const ListInput = ({ onCancel, onConfirm, type }) => {
    const listRef = useRef()
    const [validated, setValidated] = useState(false)
    const [keyboardMargin, setKeyboardMargin] = useState(0);

    const [data, setData] = useState(hardData.initDataUser);
    const dataInput = type === 'enterprise' ? hardData.inputData_Register : hardData.inputData_Register_personal;
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', e => {
            setKeyboardMargin(e.endCoordinates.height + 30);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardMargin(0);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    useEffect(() => {
        setValidated(validateData(data, type))
    }, [data])
    const renderItem = (({ item, index }) => {
        return (
            <Item
                item={item}
                // data={data}
                setData={setData}
                onFocus={() => {
                    if (index > 5) {
                        listRef.current?.scrollToOffset({ offset: 84 * (index - 4) });
                    } else if (index == 5) listRef.current?.scrollToOffset({ offset: 40 });
                }}
            />
        )
    })
    return (
        <View style={[styles.container]}>
            <FlatList
                data={dataInput}
                renderItem={renderItem}
                style={{ width: '100%', height: '100%', paddingBottom: 10 }}
                ListFooterComponent={() => (
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginVertical: 20,
                                marginHorizontal: 10,
                                justifyContent: 'space-between',

                            }}>
                            {/* <BaseButton
                                title='Quay lại'
                                style={{
                                    backgroundColor: Colors.white,
                                    width: 150
                                }}
                                textStyle={{
                                    fontWeight: '700',
                                    backgroudColor: Colors.transparent,
                                }}
                                onPress={() => {
                                    if (onCancel) onCancel(data)
                                }}
                            /> */}
                            <BaseButton
                                title={'Đăng ký'}
                                style={{
                                    backgroundColor: validated ? Colors.blue : Colors.unTouchText,
                                    borderColor: Colors.white,
                                    borderWidth: 1,
                                    width: '100%'
                                }}
                                textStyle={{ color: Colors.white, fontWeight: '600' }}
                                onPress={() => {
                                    if (onConfirm) onConfirm(data)
                                }}
                                disable={!validated}
                            />
                        </View>
                        <View style={{ height: keyboardMargin }}></View>
                    </View>
                )}
                ref={listRef}

            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: Styles.constants.widthScreen,
        height: Styles.constants.heightScreen - 155,
        paddingHorizontal: 20,
        marginTop: 15,
    },
    btn: {
        width: 150
    }
});
export default ListInput