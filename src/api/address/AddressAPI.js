import { APIHelper } from "../../common/helpers/APIHelper";

export const AddressAPI = {
    async getAllAddress(data) {
        const url = `/address/my-address`;
        return APIHelper.get(url, data)
    },
    async createAddress(data) {
        const url = `/address`;
        return APIHelper.post(url, null, data)
    },
    async getAllCities(data) {
        const url = `/cities`;
        return APIHelper.get(url, data)
    },
    async getAllDistrict(id) {
        const url = `/districts/city/${id}`;
        return APIHelper.get(url)
    },
    async getAllWards(id) {
        const url = `/wards/district/${id}`;
        return APIHelper.get(url)
    }
}