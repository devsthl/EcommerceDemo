import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { baseURL, CLEAR_PROFILE } from "../constant/Constants"
const commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}
export const axiosService = axios.create({
    baseURL: baseURL,
    headers: commonHeaders
})
const axiosServiceRefresh = axios.create({
    baseURL: baseURL,
    headers: commonHeaders,
});
const handleRefresh = async (token, refreshToken) => {
    const bodyToken = {
        Token: token,
        RefreshToken: refreshToken
    }
    try {
        const response = await axiosServiceRefresh.post('/api/Auth/RefreshToken', bodyToken)
        return response
    } catch (error) {
        throw error
    }

};
axiosService.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('kToken')
    if (token != null && !config.url.includes('/api/Auth/Login') && !config.url.includes('/api/User/ForgotPasswordConfirmation')) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})
axiosService.interceptors.response.use(response => { return response },
    async error => {
        let originalConfig = error?.config
        if (error?.response?.status === 401) {
            const token = await AsyncStorage.getItem('kToken');
            const refreshToken = await AsyncStorage.getItem('refreshToken')
            console.log('token:', token)
            console.log('refreshToken:', refreshToken)
            if (token && refreshToken) {
                const respRefresh = await handleRefresh(token, refreshToken);
                if (respRefresh && respRefresh.status === 200) {
                    if (respRefresh.data.StatusCode == 200) {
                        const newAccessToken =
                            respRefresh.data.Token
                        AsyncStorage.setItem('kToken', newAccessToken);
                        originalConfig = {
                            ...originalConfig,
                            headers: {
                                ...originalConfig.headers,
                                Authorization: `Bearer ${newAccessToken}`,
                            },
                        };
                    }
                    else {
                        await AsyncStorage.removeItem('kToken')
                        await AsyncStorage.removeItem('refreshToken')
                        return Promise.reject(CLEAR_PROFILE);
                    }
                }
            }
            else {
                await AsyncStorage.removeItem('kToken')
                await AsyncStorage.removeItem('refreshToken')
                return Promise.reject(CLEAR_PROFILE);
            }
            return axiosService(originalConfig);
        }
        return Promise.reject(error);
    }
)
export const AxiosHelper = {
    get: async (path, params) => {
        try {
            const response = await axiosService.get(path, {
                params
            })
            const statusCode = response.status
            if (response.status == 200) {
                const json = JSON.stringify(response.data)
                return json
            }
            else {
                throw { message: 'Error', code: statusCode }
            }
        } catch (error) {
            throw error
        }
    },
    post: async (path, params, data) => {
        try {
            const response = await axiosService.post(path, data, {
                params
            })
            const statusCode = response.status
            if (statusCode == 200) {
                const json = response.data
                console.log('\n======')
                console.log('URL: ', `${baseURL}${path}`)
                console.log('Body: ', data)
                console.log('Response: ', json)
                return json
            }
            else {
                throw { message: 'Error', code: statusCode }
            }
        } catch (error) {
            throw error
        }
    }
}