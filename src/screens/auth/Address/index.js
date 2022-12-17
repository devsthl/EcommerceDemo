import { View, Text } from 'react-native'
import React from 'react'
import HeaderChild from '../../../components/HeaderChild'
import { UserAPI } from '../../../api/user/UserAPI'
import { useEffect, useState } from 'react'
import InputAddress from './components/InputAddress'
const Address = ({ route }) => {
    const [data, setData] = useState({});
    const [validate, setValidate] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    // useEffect(async () => {
    //     const res = await UserAPI.createAddress(data)
    // })
    return (
        <HeaderChild title={'Add Address'}>
            <InputAddress
                data={data}
                setData={setData}
                checkValidateInput={check => {
                    setValidate(check)
                }}
            />
        </HeaderChild>
    )
}

export default Address