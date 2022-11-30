import { APIHelper } from "../../common/helpers/APIHelper";
export const UserAPI = {
    getProfile: async (id) => {
        return await APIHelper.get(`/customers/${id}`, null, true)
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