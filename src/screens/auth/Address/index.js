import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderChild from '../../../components/HeaderChild'
import { UserAPI } from '../../../api/user/UserAPI'
import { AddressAPI } from '../../../api/address/AddressAPI'
import { useEffect, useState } from 'react'
import InputAddress from './components/InputAddress'
import BaseButton from '../../../components/button/baseButton'
import ViewUtils from '../../../utils/ViewUtils'
import { useNavigation } from '@react-navigation/native'
const Address = ({ route }) => {
    const navigation = useNavigation()
    const [data, setData] = useState({});
    const [validate, setValidate] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const onCreateAddress = async () => {
        setIsLoading(true)
        const body = {
            name: data.name,
            phone: data.phone,
            unit: data.unit,
            address_detail: {
                city: data.city,
                district: data.district,
                ward: data.ward
            }
        }
        const res = await AddressAPI.createAddress(body)
        if (res.code === 0 && res.message === 'Success') {
            ViewUtils.showAlertDialog('Add address success')
            setIsLoading(false)
            navigation.navigate('CheckOut')
        } else {
            ViewUtils.showAlertDialog('Failed, please type again')

        }
    }
    console.log("data", data);
    return (
        <HeaderChild title={'Add Address'}>
            <InputAddress
                data={data}
                setData={setData}
                checkValidateInput={check => {
                    setValidate(check)
                }}
            />
            <View
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 100,
                }}>
                <BaseButton
                    title={'Add'}
                    style={styles.btn}
                    onPress={onCreateAddress}
                    textStyle={{
                        fontSize: 20,
                        color: '#61829e',
                        fontWeight: '600',
                        color: '#fff'
                    }}
                    disable={!validate}
                />
            </View>
        </HeaderChild>
    )
}
const styles = StyleSheet.create({
    btn: {
        width: '89%',
        height: '60%',
        padding: 20,
        borderColor: '#61829e',
        backgroundColor: '#61829e'
    }
})
export default Address