import { APIHelper } from "../../common/helpers/APIHelper";
// import axiosClient from "../../common/helpers/APIHelperAxios";
export const UserAPI = {
    getProfile: async () => {
        return await APIHelper.get('/users', null, true)
    },
    login: async (data) => {
        return await APIHelper.post('/users/login', null, data)
    },
    register: async (data) => {
        return await APIHelper.post('/users/register', null, data)
    },
    checkOtp: async (data) => {
        return await APIHelper.post('/customers/check-otp', null, data)
    },
    resend: async (data) => {
        return await APIHelper.post('/users/verify-email', null, data)
    }
}