import AsyncStorage from '@react-native-async-storage/async-storage';
const accessTokenKey = 'ACCESS_TOKEN';
const userInfoKey = 'USER_INFO';
const isLoginKey = 'IS_LOGIN';
const rememberPassKey = 'IS_REMEMBER_PASS'
const isLogin = null;
const userInfo = null;
const accessToken = null;
const isRememberpass = null
async function saveAccessToken(value) {
    try {
        return AsyncStorage.setItem(accessTokenKey, value.toString());
    } catch (e) {
        console.log(e);
    }
}
async function getAccessToken() {
    try {
        let value = await AsyncStorage.getItem(accessTokenKey);
        if (value === null || value === undefined) {
            dataLocal.accessToken = null;
        } else {
            dataLocal.accessToken = JSON.parse(value);
        }
    } catch (e) {
        dataLocal.accessToken = null;
        console.log(e);
    }
}
async function removeAccessToken() {
    try {
        return AsyncStorage.removeItem(accessTokenKey);
    } catch (e) {
        console.log(e);
    }
}
async function getInfoUser() {
    try {
        let value = await AsyncStorage.getItem(userInfoKey);
        if (value === null || value === undefined) {
            dataLocal.userInfo = null;
        } else {
            dataLocal.userInfo = JSON.parse(value);
        }
        return dataLocal.userInfo
    } catch (e) {
        dataLocal.userInfo = null;
        console.log(e);
    }
}
async function saveInfoUser(value) {
    try {
        await saveStatusLogin();
        return AsyncStorage.setItem(userInfoKey, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
}
async function getStatusLogin() {
    try {
        let value = await AsyncStorage.getItem(isLoginKey);
        if (value === null || value === undefined) {
            dataLocal.isLogin = null;
        } else {
            dataLocal.isLogin = JSON.parse(value);
        }
    } catch (e) {
        dataLocal.isLogin = null;
        console.log(e);
    }
}
async function saveStatusLogin() {
    try {
        return AsyncStorage.setItem(isLoginKey, '1');
    } catch (e) {
        console.log(e);
    }
}
async function removeStatusLogin() {
    try {
        return AsyncStorage.removeItem(isLoginKey);
    } catch (e) {
        console.log(e);
    }
}
async function removeInfoUser() {
    try {
        return AsyncStorage.removeItem(userInfoKey);
    } catch (e) {
        console.log(e);
    }
}
const saveAccount = (username, password) => {
    try {
        console.log('saving')
        return AsyncStorage.setItem(rememberPassKey, JSON.stringify({ username: username, password: password }))
    } catch (error) {
        console.log(error)
    }
}
const getAccount = async () => {
    try {
        const acc = await AsyncStorage.getItem(rememberPassKey)
        if (acc === null || acc === undefined) return null
        else return JSON.parse(acc)
    } catch (error) {
        console.log(error)
    }
}
const removeAccount = async () => {
    try {
        return AsyncStorage.removeItem(rememberPassKey)
    } catch (error) {
        console.log(error)
    }
}
async function getAll() {
    await getInfoUser();
    await getStatusLogin();
    await getAccessToken();
}
async function removeAll() {
    await removeInfoUser();
    await removeAccessToken();
    await removeStatusLogin();
}
const dataLocal = {
    removeAll,
    getAll,
    getAccessToken,
    getStatusLogin,
    getInfoUser,
    saveInfoUser,
    userInfo,
    saveAccessToken,
    removeAccessToken,
    saveStatusLogin,
    accessToken,
    isLogin,
    saveAccount,
    getAccount,
    removeAccount
};

export default dataLocal;
