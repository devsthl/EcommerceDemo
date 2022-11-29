import AsyncStorage from "@react-native-async-storage/async-storage"

export const isUser = async () => {
    const token = await AsyncStorage.getItem('kToken')
    if (token) {
        return true;
    } else {
        return false
    }
}