import { APIHelper } from "../../common/helpers/APIHelper";

export const CartAPI = {
    async addCart(data) {
        const url = `/cart`;
        return APIHelper.post(url, null, data);
    },
    async getAllCart() {
        const url = `/cart`;
        return APIHelper.get(url)
    },
    async getFeesShip(data) {
        const url = `/orders/fee`;
        return APIHelper.post(url, null, data)
    },
    async getCountPrice(data) {
        const url = `/orders/count-price`;
        return APIHelper.post(url, null, data)
    }
}