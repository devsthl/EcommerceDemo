import AppConstants from "../base/AppConstants"
import DeviceInfo from 'react-native-device-info';
import Constants from "../common/constants/Constants";
export default {
    // converListToRowList(items, type) {
    //     let itemList = []; // Item trên cùng 1 hàng
    //     let list = []; //số hàng
    //     let itemCountInRow = DeviceInfo.isTablet ? 3 : 2;
    //     let insertCount = 0;
    // },
    getPercent(item) {

        if (item?.originalPrice === 0) {
            return 0;
        }
        let percent = Math.floor(
            (100 * (item?.price - item?.originalPrice)) / item?.price,
        );
        return percent > 0 ? percent : 0;
    },
    getStoreAvatar(image, index) {
        if (image === null || image === undefined || image.length === 0) {
            return { uri: 'https://picsum.photos/300/300?avatar=' + index }
        } else return { uri: Constants.baseURL + image }
    }
}