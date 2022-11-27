import { APIHelper } from "../../common/helpers/APIHelper";

export const EventsAPI = {

    async getAll(type) {
        const url = `/events/all-paging?type=${type}`;
        return APIHelper.get(url)
    },
    async registerEvent(data) {
        const url = `/bookings`;
        return APIHelper.post(url)
    },
}