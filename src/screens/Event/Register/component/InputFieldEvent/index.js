import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import TextInputTitle from '../../../../../components/Input/TextInputTitle'
import dataUltils from '../../../../../data/dataUltils'
import TextInputWithTitle from '../../../../../components/Input/TextInputWithTitle'
const InputFieldEvent = ({
    data, setData, checkValidateInput, style
}) => {
    const [fullName, setFullname] = useState(data.full_name);
    const [phone, setPhone] = useState(data.phone);
    const [address, setAddress] = useState(data.address);
    const [email, setEmail] = useState(data.email);
    const [validateCompanyName, setValidateCompanyName] = useState(false);
    const [validatePosition, setValidatePosition] = useState(false);
    const [validateFullName, setValidateFullName] = useState(false);
    const [validatePhone, setValidatePhone] = useState(false);
    const [validateAddress, setValidateAddress] = useState(false);
    const [validateEmail, setValidateEmail] = useState(false);

    useEffect(() => {
        if (checkValidateInput)
            checkValidateInput(
                !validateFullName &&
                !validatePhone &&
                !validateAddress &&
                !validateEmail &&
                !validateCompanyName &&
                !validatePosition,
            )
    }, [fullName, phone, address, email])
    useEffect(() => {
        checkValidateInput(false)
    }, [])

    const onChangeCompanyName = text => {
        setFullname(text);
        setData(prev => {
            prev.company_name = text;
            return prev
        });
        if (text === '') setValidateCompanyName(true);
        else setValidateCompanyName(!dataUltils.validateName(text))
    }
    const onChangeFullName = (text) => {
        setFullname(text)
        console.log(fullName);
    }
    return (
        <View style={[{ paddingHorizontal: 10 }, style]}>
            <TextInputTitle
                title={'Your Company Name'}
                // keyboardType={'default'}
                value={data.company_name}
                onChange={onChangeCompanyName}
                inputStyle={{ marginHorizontal: 20, marginTop: 15 }}
                validate={validateCompanyName}

            />
            <TextInputTitle
                title={'Your Full Name'}
                // keyboardType={'default'}
                value={data.full_name}
                onChange={onChangeFullName}
                inputStyle={{ marginHorizontal: 20, marginTop: 15 }}
                validate={validateCompanyName}
            />
        </View>
    )
}

export default InputFieldEvent