import { APIHelper } from "../../common/helpers/APIHelper";


export const UserAPI = {
    getProfile: async () => {
        return await APIHelper.get('/users', null, true)
    }
}