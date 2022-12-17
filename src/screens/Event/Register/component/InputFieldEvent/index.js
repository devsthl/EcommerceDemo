import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import TextInputTitle from '../../../../../components/Input/TextInputTitle'
import dataUltils from '../../../../../data/dataUltils'
const InputFieldEvent = ({
    data, setData, checkValidateInput, style
}) => {
    const [fullName, setFullname] = useState(data.full_name);
    const [phone, setPhone] = useState(data.phone);
    const [address, setAddress] = useState(data.address);
    const [email, setEmail] = useState(data.email);
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
                !validateEmail
            )
    }, [fullName, phone, address, email])
    useEffect(() => {
        checkValidateInput(false)
    }, [])
    const onChangeFullName = (text) => {
        setFullname(text)
        setData(prev => {
            prev.contact_name = text;
            return prev
        })
        if (text === '') setValidateFullName(true);
        else setValidateFullName(!dataUltils.validateName(text))
    }
    const onChangeEmail = (text) => {
        setEmail(text)
        setData(prev => {
            prev.email = text;
            return prev
        })
        if (text === '') setValidateEmail(true);
        else setValidateEmail(!dataUltils.validMail(text))
    }
    const onChangePhone = (text) => {
        setPhone(text)
        setData(prev => {
            prev.phone = text;
            return prev
        })
        if (text === '') setValidatePhone(true);
        else setValidatePhone(!dataUltils.validatePhone(text))
    }
    const onChangeAddress = (text) => {
        setAddress(text);
        setData(prev => {
            prev.address = text;
            return prev
        })
        if (text === '') setValidateAddress(true);
        else setValidateAddress(!dataUltils.validateName(text))
    }
    return (
        <View style={[{ paddingHorizontal: 10 }, style]}>
            <TextInputTitle
                title={'Your Full Name'}
                keyboardType={'default'}
                value={data.full_name}
                onChange={onChangeFullName}
                inputStyle={{ marginHorizontal: 20, marginTop: 15 }}
                validate={validateFullName}
            />
            <TextInputTitle
                title={'Your Email'}
                keyboardType={'default'}
                value={data.email}
                onChange={onChangeEmail}
                inputStyle={{ marginHorizontal: 20, marginTop: 15 }}
                validate={validateEmail}
            />
            <TextInputTitle
                title={'Your Telephone Number'}
                keyboardType={'decimal-pad'}
                value={data.phone}
                onChange={onChangePhone}
                inputStyle={{ marginHorizontal: 20, marginTop: 15 }}
                validate={validatePhone}
            />
            <TextInputTitle
                title={'Your Address'}
                keyboardType={'default'}
                value={data.address}
                onChange={onChangeAddress}
                inputStyle={{ marginHorizontal: 20, marginTop: 15 }}
                validate={validateAddress}
            />
        </View>
    )
}

export default InputFieldEvent