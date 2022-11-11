import { APIHelper } from "../../common/helpers/APIHelper";
import axios from "axios";

export const UserAPI = {
    getProfile: async () => {
        return await APIHelper.get('/events', null, true)
    },
    login: async (data) => {
        return await APIHelper.post('/users/login', null, data)
    }
}