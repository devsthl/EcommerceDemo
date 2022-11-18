import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { validateInput } from '../../validate'
import InputDatePicker from '../InputDatePicker';
import hardData from '../../../../../base/hardData';
import TextInputWithTitle from '../../../../../components/Input/TextInputWithTitle';
import Colors from '../../../../../assets/colors/Colors';
import DropDown from '../../../../../components/Input/DropDownList';
const Item = ({
    item, data, setData, onFocus
}) => {
    const [text, setText] = useState('');
    const [validate, setValidate] = useState(true);

    const onChangeText = (changeText) => {
        if (changeText === '') setValidate(false);
        else {
            setValidate(validateInput(changeText, item.name));
        }
        setText(changeText);
        setData(data => {
            return { ...data, [item.name]: changeText };
        });
    };
    if (item.name === 'none') {
        return (
            <View>
                <Text>Thông tin đề xuất</Text>
            </View>
        )
    } else if (item.name === 'date_of_birth') {
        return (
            <InputDatePicker
                title={'Ngày sinh'}
                onChangeDate={date => {
                    setData(prev => {
                        return { ...prev, [item.name]: date.toUTCString() };
                    });
                }}
            />
        )
    } else if (item.name === 'password') {
        return (
            <View>
                <TextInputWithTitle
                    keyboardType={'default'}
                    value={text}
                    onChangeText={onChangeText}
                    title={'Mật khẩu'}
                    validate={validate}
                    placeholder={`${item.example}`}
                    require
                    onFocus={onFocus}
                    password={true}
                />
                {!validate && (
                    <View
                        style={{
                            minHeight: 50,
                            marginHorizontal: 6,
                        }}
                    >
                        <Text style={{ color: Colors.primary_color }}>Mật khẩu gồm 8 ký tự trở lên, [A-z], số, ký tự đặc biệt !@#$%</Text>
                    </View>
                )}
            </View>
        )
    } else if (item.name === 'gender') {
        return (
            <DropDown
                list={hardData.gender}
                title={'Giới tính'}
                onSelectedItem={(value) => {
                    setData(prev => {
                        return { ...prev, [item.name]: value };
                    });
                }}
            />
        );
    } else if (item.name === 'address') {
        return (
            <View>
                <TextInputWithTitle
                    keyboardType={'default'}
                    value={text}
                    onChangeText={onChangeText}
                    title={'Địa chỉ'}
                    validate={validate}
                    placeholder={item.example}
                    require
                    onFocus={onFocus}
                    lines={3}
                    maxLength={100}
                />
                <Text style={{ textAlign: 'right', marginRight: 5 }}>
                    {text.length}/100
                </Text>
            </View>
        )
    } else {
        return (
            <TextInputWithTitle
                keyboardType={'default'}
                value={text}
                onChangeText={onChangeText}
                title={`${item.name}`}
                validate={validate}
                placeholder={item.example}
                require
                onFocus={onFocus}
            />
        )
    }
}

export default Item