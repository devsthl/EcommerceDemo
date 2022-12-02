import { APIHelper } from "../../common/helpers/APIHelper";

export const ProductAPI = {

    async getAllProduct(data) {
        const url = `/products`;
        return APIHelper.get(url, data)
    }
}