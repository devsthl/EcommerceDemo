import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../../../assets/colors/Colors';
import AppConstants from '../../../../../base/AppConstants';
import DatePicker from 'react-native-date-picker';
import Ionions from 'react-native-vector-icons/Ionicons'
import icon from '../../../../../base/icon';
import DateUtils from '../../../../../utils/DateUtils';
const InputDatePicker = ({
    title, containerStyle, onChangeDate
}) => {
    const [date, setDate] = useState(new Date());
    const [picked, setPicked] = useState(false);
    const [isShowDatePicker, setIsShowDatePicker] = useState(false);
    return (
        <View style={{ minHeight: 84 }}>
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.container, containerStyle]}>
                {!picked ? (
                    <Text style={{ flexGrow: 1 }}>Chọn ngày sinh</Text>
                ) : (
                    <Text style={{ color: Colors.black, flexGrow: 1 }}>
                        {DateUtils.formatDate(AppConstants.DATE_FORMAT, date)}
                    </Text>
                )}
                <Pressable onPress={() => { setIsShowDatePicker(true) }}>
                    <Ionions
                        name={icon.calendar_outline}
                        size={15}
                        color={Colors.gray}
                        style={{ marginHorizontal: 5 }}
                    />
                </Pressable>
                <DatePicker
                    date={date}
                    modal
                    onConfirm={(date) => {
                        setIsShowDatePicker(false)
                        setDate(date)
                        setPicked(true)
                        if (onChangeDate) onChangeDate(date)
                    }}
                    onCancel={() => {
                        setIsShowDatePicker(false)
                    }}
                    open={isShowDatePicker}
                    mode={'date'}
                />
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
        flexDirection: 'row',
    },
});
export default InputDatePicker