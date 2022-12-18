import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import dataUltils from '../../../../../data/dataUltils'
import TextInputTitle from '../../../../../components/Input/TextInputTitle'
import { getAllDistrict, getAllWards, getAllCities } from '../../../../../store/Address/AddressSlice'
import { useSelector } from 'react-redux'
import DropDownPicker from 'react-native-dropdown-picker'
import DropdownWithTitle from '../../../../../components/Input/DropdownWithTitle'
const InputAddress = ({
    data, setData, checkValidateInput, style
}) => {
    const dispatch = useDispatch()
    const { districtList, wardsList, citiesList } = useSelector((state) => state.addressReducer)
    const [fullName, setFullName] = useState(data.name);
    const [phone, setPhone] = useState(data.phone);
    const [unit, setUnit] = useState(data.unit)
    const [validateName, setValidateName] = useState(false);
    const [validatePhone, setValidatePhone] = useState(false);
    const [validateUnit, setValidateUnit] = useState(false)
    // cities
    const [openCity, setOpenCity] = useState(false);
    const [valueCity, setValueCity] = useState(null);
    const [idCity, setIdCity] = useState();
    // district
    const [openDistrict, setOpenDistrict] = useState(false);
    const [valueDistrict, setValueDistrict] = useState(null);
    const [idDistrict, setIdDistrict] = useState();
    // ward
    const [openWard, setOpenWard] = useState(false);
    const [valueWard, setValueWard] = useState(null)
    const [idWard, setIdWard] = useState()

    const cities = citiesList.map((item) => {
        return {
            label: item.name,
            value: item,
        }
    })
    const district = districtList.map(item => {
        return {
            label: item.name,
            value: item,
        }
    })
    const ward = wardsList.map(item => {
        return {
            label: item.name,
            value: item
        }
    })
    useEffect(() => {
        if (checkValidateInput)
            checkValidateInput(
                !validateName &&
                !validatePhone &&
                !validateUnit
            )
    }, [fullName, phone, unit])
    useEffect(() => {
        checkValidateInput(false)
    }, [])
    useEffect(() => {
        dispatch(getAllCities())
    }, [])
    const onChangeFullName = (text) => {
        setFullName(text)
        setData(prev => {
            prev.name = text;
            return prev
        })
        if (text === '') setValidateName(true);
        else setValidateName(!dataUltils.validateName(text))
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
    const onChangeUnit = (text) => {
        setUnit(text)
        setData(prev => {
            prev.unit = text;
            return prev
        })
        if (text === '') setValidateUnit(true)
        else setValidateUnit(!dataUltils.validateUnit(text))
    }
    console.log('data: ', data);
    console.log('value: ', valueDistrict);
    return (
        <View style={[{ paddingHorizontal: 10 }, style]}>
            <TextInputTitle
                title={'Your Full Name'}
                keyboardType={'default'}
                value={fullName}
                validate={validateName}
                inputStyle={{ marginHorizontal: 20, marginTop: 15 }}
                onChange={onChangeFullName}
            />
            <TextInputTitle
                title={'Your Number Phone'}
                keyboardType={'decimal-pad'}
                value={phone}
                validate={validateName}
                inputStyle={{ marginHorizontal: 20, marginTop: 15 }}
                onChange={onChangePhone}
            />
            <DropdownWithTitle title={'Select Your City'} style={{ zIndex: 3 }}>
                <DropDownPicker
                    open={openCity}
                    setOpen={setOpenCity}
                    value={valueCity}
                    placeholder={'Select an your City'}
                    items={cities}
                    setValue={setValueCity}
                    onSelectItem={(item) => {
                        setData({
                            ...data,
                            city: {
                                id: item.value.id,
                                name: item.value.name,
                                ghn_id: item.value.ghnId
                            }
                        })
                        setIdCity(item.value.id)
                        dispatch(getAllDistrict(idCity))
                    }}
                />
            </DropdownWithTitle>
            <DropdownWithTitle title={'Select Your District'} style={{ zIndex: 2 }}>
                <DropDownPicker
                    open={openDistrict}
                    setOpen={setOpenDistrict}
                    value={valueDistrict}
                    placeholder={'Select an your District'}
                    items={district}
                    setValue={setValueDistrict}
                    onSelectItem={(item) => {
                        setData({
                            ...data,
                            district: {
                                id: item.value.id,
                                name: item.value.name,
                                ghn_id: item.value.ghnId
                            }
                        })
                        setIdDistrict(item.value.id)
                        dispatch(getAllWards())
                    }}
                    onPress={() => {
                        dispatch(getAllDistrict(idCity))
                    }}
                />
            </DropdownWithTitle>
            <DropdownWithTitle title={'Select Your Ward'} style={{ zIndex: 1 }}>
                <DropDownPicker
                    open={openWard}
                    setOpen={setOpenWard}
                    value={valueWard}
                    items={ward}
                    placeholder={'Select an your Ward'}
                    setValue={setValueWard}
                    onSelectItem={(item) => {
                        setData({
                            ...data,
                            ward: {
                                id: item.value.id,
                                name: item.value.name,
                                ghn_id: item.value.ghnId
                            }
                        })
                        setIdWard(item.value.id)
                    }}
                    onPress={() => {
                        dispatch(getAllWards(idDistrict))
                    }}
                />
            </DropdownWithTitle>
            <TextInputTitle
                title={'Your Unit (example: 14 Hong Phong Street)'}
                keyboardType={'default'}
                value={unit}
                validate={validateUnit}
                inputStyle={{ marginHorizontal: 20, marginTop: 15 }}
                onChange={onChangeUnit}
            />
        </View>
    )
}

export default InputAddress