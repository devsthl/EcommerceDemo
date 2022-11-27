import { Alert } from "react-native"

export default {
    showAlertDialog(msg, onAccept) {
        Alert.alert(
            'Notification',
            msg,
            [
                {
                    text: 'Accept',
                    onPress: () => {
                        if (onAccept != null) {
                            onAccept();
                        }
                    }
                }
            ],
            { cancelable: false },
        )
    }
}