import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TextInputWithTitle from '../../../components/Input/TextInputWithTitle'
import dataUltils from '../../../data/dataUltils'
import HeaderChild from '../../../components/HeaderChild'
import ViewUtils from '../../../utils/ViewUtils'
import { ActivityIndicator } from 'react-native-paper'
import InputFieldEvent from './component/InputFieldEvent'
import Colors from '../../../assets/colors/Colors'
import { EventsAPI } from '../../../api/events/EventsAPI'
import { useNavigation } from '@react-navigation/native'
const RegisterEventScreen = ({
    item, route,
}) => {
    const navigation = useNavigation()
    const [dataInput, setDataInput] = useState({});
    const [validate, setValidate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onConfirm = async (data) => {
        setIsLoading(true);
        const body = {
            ...dataInput,
            list_details: [
                { event_id: route.params.item.type }
            ],
            type: 5
        }
        const res = await EventsAPI.registerEvent(body)
        if (res.code === 0 && res.message === 'Success') {
            ViewUtils.showAlertDialog('Sign Up Success', () => {
                setIsLoading(false);
                navigation.navigate('Home')
            })
        } if (res.message === 'Booking Event Exist') {
            ViewUtils.showAlertDialog('You have registered for this event', () => {
                setIsLoading(false);
                navigation.navigate('Home')
            })
        }
        else {
            ViewUtils.showAlertDialog('Registration failed', () => {
                setIsLoading(false);
            })
        }

        console.log('res', body);
    }
    return (
        <View>
            <HeaderChild title={'Event register form'}>
                <View style={[
                    styles.view1,
                    { zIndex: isLoading ? 100 : -100 }]}>
                    <ActivityIndicator animating={isLoading} size='large' color='#00ff00' />
                </View>
                <ScrollView>
                    <InputFieldEvent
                        data={dataInput}
                        setData={setDataInput}
                        checkValidateInput={check => {
                            setValidate(check)
                        }}
                    />
                    <TouchableOpacity style={styles.touch}
                        disabled={!validate}
                        onPress={() => {
                            onConfirm();
                        }}>
                        <Text style={styles.text}>Register</Text>
                    </TouchableOpacity>

                </ScrollView>
            </HeaderChild>
        </View >
    )
}
const styles = StyleSheet.create({
    view1: {
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touch: {
        width: '85%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 14,
        borderColor: Colors.titleNewColor,
        marginTop: 36,
        alignSelf: 'center',
    },
    text: {
        color: Colors.tabBlack,
        fontSize: 18
    }
})
export default RegisterEventScreen