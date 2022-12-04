import AppConstants from "../base/AppConstants"
import DeviceInfo from 'react-native-device-info';

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
}