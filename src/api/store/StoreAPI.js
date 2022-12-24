import { APIHelper } from "../../common/helpers/APIHelper";

export const StoreAPI = {
    async getStoreById(id) {
        const url = `/stores/${id}`;
        return APIHelper.get(url);
    }
}