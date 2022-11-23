import { APIHelper } from "../../common/helpers/APIHelper";

export const EventsAPI = {
    // getAll: async (type, index, size) => {
    //     return await APIHelper.get(`/events/all-paging?type=${type}&page_index=${index}&page_size=${size}`, null, true)
    // },
    async getAll(type, index, size) {
        const url = `/events/all-paging?type=${type}&page_index=${index}&page_size=${size}`;
        return APIHelper.get(url)
    },
}