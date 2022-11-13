import Styles from "./Styles";
import { Platform } from "react-native";

const x = Styles.constants.X;
export default {
    LOG_TAG: '',
    IS_IOS: Platform.OS === 'ios',
    LIMIT: 30,
    TIME_OUT: 10000,
    DATE_FORMAT: 'DD-MM-YYYY',
    size9: 9,
    size10: 10,
    size11: 11,
    size12: 12,
    size13: 13,
    size14: 14,
    size15: 15,
    size16: 16,
    size17: 17,
    size18: 18,
    size19: 19,
    exceedNicknameLength: 'Vượt quá số lượng ký tự cho phép',
    downloadFailed: 'Tải dữ liệu không thành công',

    // server associated
    clientServerCommunicationProb: 'Lỗi trong quá trình giao tiếp với máy chủ',
    connectToServerFailed: 'Không thể kết nối đến máy chủ',
    //
    EventName: {
        LOGIN: 'LOGIN_EVENT',
        LOAD_GROUP_PRODUCT: 'LOAD_GROUP_PRODUCT',
        GET_TOTAL_CART: 'GET_TOTAL_CART',
        ADD_NEW_STORE: 'ADD_NEW_STORE',
        GO_TO_TAB: 'GO_TO_TAB',
    },
    //
    IMAGE_SCALE_TYPE: {
        COVER: 'cover',
        CONTAIN: 'contain',
        STRETCH: 'stretch',
        CENTER: 'center',
    },
    // user
    userNotFound: 'Không tìm thấy thông tin người dùng',
    uploadAvatarFailed: 'Cập nhật ảnh đại diện thất bại',
    SharedPreferencesKey: {
        LANGUAGE: 'LANGUAGE',
        FIRST_LOGIN: 'FIRST_LOGIN',
        LOGIN_INFOR: 'LOGIN_INFOR',
        PROVINCE: 'PROVINCE',
        USER_LOCATION: 'USER_LOCATION',
        WEATHER_DATA: 'WEATHER_DATA',
    },
    code: {
        CUSTOMER_EXIST_NAME: 'CUSTOMER_EXIST_NAME',
        CUSTOMER_EXIST: 'CUSTOMER_EXIST',
        CUSTOMER_NAME_NOT_EXIST: 'CUSTOMERNAME_NOT_EXIST',
        CUSTOMER_NAME_INVALID: 'CUSTOMER_NAME_INVALID',
        CUSTOMER_FOUND: 'CUSTOMER_FOUNDED',
        CUSTOMER_NOT_FOUND: 'CUSTOMER_NOT_FOUND',
        CUSTOMER_TYPE_INVALID: 'CUSTOMER_TYPE_INVALID',
        CUSTOMER_NOT_AVAILABLE: 'CUSTOMER_NOT_AVAILABLE',
        CUSTOMER_ID_NOT_FOUND: 'CUSTOMER_ID_NOT_FOUND',
        CUSTOMER_MAIL_NOT_FOUND: 'CUSTOMER_MAIL_NOT_FOUND',
        CUSTOMER_MAIL_EXIST: 'CUSTOMER_MAIL_EXIST',
        CUSTOMER_MAIL_EXIST_OR_PHONE: 'CUSTOMER_MAIL_EXIST_OR_PHONE',
        CUSTOMER_MAIL_PHONE: 'CUSTOMER_MAIL_PHONE',
        CUSTOMER_PASS_INVALID: 'CUSTOMER_PASSWORD_INVALID',
        CUSTOMER_CREATE_SUSSCESS: 'CUSTOMER_CREATE_SUSSCESS',
        CUSTOMER_CREATE_FAIL: 'CUSTOMER_CREATE_FAIL',
        CUSTOMER_UPDATE_SUSSCESS: 'CUSTOMER_UPDATE_SUSSCESS',
        CUSTOMER_UPDATE_FAIL: 'CUSTOMER_UPDATE_FAIL',
        CUSTOMER_RESTORE_SUSSCESS: 'CUSTOMER_RESTORE_SUSSCESS',
        CUSTOMER_RESTORE_FAIL: 'CUSTOMER_RESTORE_FAIL ',
        CUSTOMER_MAIL_REQUIRED: 'TRY_ANOTHER_EMAIL',
        CUSTOMER_DELETED: 'CUSTOMER_DELETED',
        CUSTOMER_DELETE_FAIL: 'CUSTOMER_DELETE_FAIL',
        CUSTOMER_LOGIN_SUSSCESS: 'CUSTOMER_LOGIN_SUSSCESS',
        CUSTOMER_LOGIN_FAIL: 'CUSTOMER_LOGIN_FAIL',
        USER_HAD_STORE: 'USER_HAD_STORE',
        CUSTOMER_HAD_EXIST_BUT_NOT_ACTIVE: 'CUSTOMER_HAD_EXIST_BUT_NOT_ACTIVE',
        LOGIN_FAIL: 'LOGIN_FAIL'
    },
}