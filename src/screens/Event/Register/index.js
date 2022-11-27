import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import TextInputWithTitle from '../../../components/Input/TextInputWithTitle'
import dataUltils from '../../../data/dataUltils'
import HeaderChild from '../../../components/HeaderChild'
import ViewUtils from '../../../utils/ViewUtils'
import { ActivityIndicator } from 'react-native-paper'
import InputFieldEvent from './component/InputFieldEvent'
const RegisterEventScreen = ({
    item, route
}) => {
    const [dataInput, setDataInput] = useState({});
    const [validate, setValidate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading1, setIsLoading1] = useState();

    const onchange = (text) => {
        setIsLoading1(text)
    }
    return (
        <HeaderChild title={'Register Event'}>
            <View style={[
                styles.view1,
                { zIndex: isLoading ? 100 : -100 }]}>
                <ActivityIndicator animating={isLoading} size='large' color='#00ff00' />
            </View>
            <View>
                <ScrollView>
                    <InputFieldEvent
                        data={dataInput}
                        setData={setDataInput}
                        checkValidateInput={check => {
                            setValidate(check)
                        }}
                    />

                </ScrollView>
            </View>
        </HeaderChild>
    )
}
const styles = StyleSheet.create({
    view1: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view2: {

    }
})
export default RegisterEventScreen