import { APIHelper } from "../../common/helpers/APIHelper";

export const EventsAPI = {

    async getAll(data) {
        const url = `/events`;
        return APIHelper.get(url, data)
    },
    async getAllwithPag(index, size) {
        const url = `/events/all-paging?page_index=${index}&page_size=${size}`;
        return APIHelper.get(url);
    },
    async registerEvent(data) {
        const url = `/bookings`;
        return APIHelper.post(url, null, data)
    },
}