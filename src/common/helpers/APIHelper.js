import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL, COMMON_MESSAGE, SESSION_EXPIRED } from "../constants/Constants"
import { getUniqueId, getVersion, getBuildNumber, getSystemVersion, getModel } from "react-native-device-info"
import { Platform } from "react-native";


const camelize = require('camelize');
const commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'deviceId': getUniqueId(),
    'os': Platform.OS,
    'version': getVersion() + '_' + getBuildNumber(),
    'osVersion': getSystemVersion(),
    'model': getModel(),
    ecommerce_id: 69,

}
const paramsToString = (params) => {
    if (params != null) {
        var string = ''
        Object.keys(params).forEach(key => {
            const param = key + '=' + encodeURIComponent(params[key])
            string += '&'
            string += param
        });
        string = string.substring(1)
        return string
    } else {
        return ''
    }
}

const getURL = (path, params) => {
    var url = baseURL + path
    var paramsString = ''
    if (params != null) {
        paramsString = paramsToString(params)
    }
    if (paramsString.length > 0) {
        url += "?" + paramsString
    }

    return url
}

export const APIHelper = {
    get: async (path, params, getRaw) => {
        const url = getURL(path, params)
        var headers = { ...commonHeaders }
        const token = await AsyncStorage.getItem('kToken')
        console.log("token", JSON.parse(token));
        if (token != null) {
            headers['Authorization'] = `Bearer ${JSON.parse(token)}`
        }
        try {
            const response = await fetch(url
                , {
                    method: 'GET',
                    headers: headers,
                }
            );
            const statusCode = response.status
            if (statusCode == 401) {
                throw { message: SESSION_EXPIRED, code: 401 }
            } else {
                if (getRaw) {
                    const json = await response.json()
                    const responseJson = json
                    // LOG
                    console.log('\n======')
                    console.log('URL: ', url)
                    console.log('Headers: ', headers)
                    console.log('Response Raw: ', responseJson)
                    return responseJson
                } else {
                    const json = await response.json()
                    const responseJson = camelize(json)
                    // LOG
                    console.log('\n======')
                    console.log('URL: ', url)
                    console.log('Headers: ', headers)
                    console.log('Response: ', responseJson)
                    return responseJson
                }

            }

        } catch (error) {
            // LOG
            console.log('\n======')
            console.log('URL: ', url)
            console.log('Headers: ', headers)
            console.log('Error: ', error)
            throw error
        }
    },
    post: async (path, params, body, isNotJSON) => {
        const url = getURL(path, params)
        var headers = { ...commonHeaders }
        const token = await AsyncStorage.getItem('kToken')
        if (token != null && !path.includes('/auth/api/')) {
            headers['Authorization'] = `Bearer ${JSON.parse(token)}`
        }
        try {
            const response = await fetch(url
                , {
                    method: 'POST',
                    headers: headers,
                    body: body != null ? (isNotJSON ? body : JSON.stringify(body)) : null
                }
            );
            const statusCode = response.status
            console.log(statusCode)
            if (statusCode == 401) {
                throw { message: SESSION_EXPIRED, code: 401 }
            } else if (statusCode == 200) {
                const json = await response.json()
                const responseJson = camelize(json)
                // LOG
                console.log('\n======')
                console.log('URL: ', url)
                console.log('Headers: ', headers)
                console.log('Body: ', body)
                console.log('Response: ', responseJson)
                return responseJson
            } else {
                throw { message: COMMON_MESSAGE, code: statusCode }
            }
        } catch (error) {
            // LOG
            console.log('\n======')
            console.log('URL: ', url)
            console.log('Headers: ', headers)
            console.log('Body: ', body)
            console.log('Error: ', error)
            throw error
        }
    },
    put: async (path, params, body) => {
        const url = getURL(path, params)
        var headers = { ...commonHeaders }
        const token = await AsyncStorage.getItem('kToken')
        if (token != null) {
            headers['Authorization'] = `Bearer ${JSON.parse(token)}`
        }
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: headers,
                body: body != null ? JSON.stringify(body) : null
            });
            const statusCode = response.status
            if (statusCode == 401) {
                throw { message: SESSION_EXPIRED, code: 401 }
            } else {
                const json = await response.json()
                const responseJson = camelize(json)
                // LOG
                console.log('\n======')
                console.log('URL: ', url)
                console.log('Headers: ', headers)
                console.log('Body: ', body)
                console.log('Response: ', responseJson)
                return responseJson
            }

        } catch (error) {
            // LOG
            console.log('\n======')
            console.log('URL: ', url)
            console.log('Headers: ', headers)
            console.log('Body: ', body)
            console.log('Error: ', error)
            throw error
        }
    },
    delete: async (path, params, body) => {
        const url = getURL(path, params)
        var headers = { ...commonHeaders }
        const token = await AsyncStorage.getItem('kToken')
        if (token != null) {
            headers['Authorization'] = `Bearer ${JSON.parse(token)}`
        }
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: headers,
                body: body != null ? JSON.stringify(body) : null
            });
            const statusCode = response.status
            if (statusCode == 401) {
                throw { message: SESSION_EXPIRED, code: 401 }
            } else {
                const json = await response.json()
                const responseJson = camelize(json)
                // LOG
                console.log('\n======')
                console.log('URL: ', url)
                console.log('Headers: ', headers)
                console.log('Body: ', body)
                console.log('Response: ', responseJson)
                return responseJson
            }

        } catch (error) {
            // LOG
            console.log('\n======')
            console.log('URL: ', url)
            console.log('Headers: ', headers)
            console.log('Body: ', body)
            console.log('Error: ', error)
            throw error
        }
    },
    upload: async (path, params, imageURI, type, fileName) => {
        const url = getURL(path, params)
        var headers = { ...commonHeaders, 'Content-Type': 'multipart/form-data' }
        const token = await AsyncStorage.getItem('kToken')
        if (token != null) {
            headers['Authorization'] = `Bearer ${JSON.parse(token)}`
        }
        var data = new FormData();
        data.append('file', { uri: imageURI, name: fileName, type: type }, fileName)
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: data
            });
            const statusCode = response.status
            console.log(statusCode)
            if (statusCode == 401) {
                throw { message: SESSION_EXPIRED, code: 401 }
            } else {
                const json = await response.json()
                const responseJson = camelize(json)
                // LOG
                console.log('\n======')
                console.log('URL: ', url)
                console.log('Headers: ', headers)
                console.log('Body: ', { uri: imageURI, type: type, fileName: fileName })
                console.log('Response: ', responseJson)
                return responseJson
            }

        } catch (error) {
            // LOG
            console.log('\n======')
            console.log('URL: ', url)
            console.log('Headers: ', headers)
            console.log('Body: ', { uri: imageURI, type: type, fileName: fileName })
            console.log('Error: ', error)
            throw error
        }
    }
}