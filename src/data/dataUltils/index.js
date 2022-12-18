import dataLocal from "../dataLocal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL } from "../../common/constants/Constants";
import AppConstants from '../../base/AppConstants'
// import { useNavigation } from "@react-navigation/native";
import React from "react";
import Constants from "../../common/constants/Constants";
import { navigationRef } from "../../routes/navigationUtils";

export default {
    checkLogin(callback) {
        if (dataLocal.isLogin !== null) {
            return callback()
        } else {
            navigationRef.current?.navigate('Login')
            // navigation.navigate('Login')
        }
    },
    stringNullOrEmpty(str) {
        return str === undefined || str === null || str.trim() === '';
    },
    getImageUrl(images, id = dataLocal.userInfo?.id) {
        if (typeof images === 'string') {
            if (images.startsWith('https://') || images.startsWith('http://')) {
                return images;
            }
            return baseURL + images;
        }
        if (images?.length > 0) {
            return baseURL + images[0].url;
        }
        return Constants.hostImageIsNull + id;
    },
    trimNumber(number) {
        return number.replace(/[^\d]/g, '');
    },
    async checkStatusLogin(login, notLogin) {
        let value = await AsyncStorage.getItem('USER_INFO');
        if (value === null || value === undefined) {
            dataLocal.userInfo = null;
        } else {
            dataLocal.userInfo = JSON.parse(value);
        }
        let isLogin = await AsyncStorage.getItem('IS_LOGIN', '');
        if (isLogin === null || isLogin === undefined) {
            dataLocal.isLogin = null;
        } else {
            dataLocal.isLogin = JSON.parse(isLogin)
        }
        let data = dataLocal.userInfo;
        if (dataLocal.isLogin !== null) {
            return login(data)
        } else {
            return notLogin();
        }
    },
    validatePhone(phone) {
        let reGex = new RegExp(/(\+84|0)+([3|5|7|8|9])+([0-9]{8})\b/, 'g');
        let phones = reGex.test(phone);
        return phones;
    },
    validateName(name) {
        let reGex = new RegExp(
            /^[_A-zÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*((-|\s)*[_A-zÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ])*$/,
            'gm',
        );
        let names = reGex.test(name);
        return names;
    },
    validateUnit(name) {
        let reGex = new RegExp(
            /^[_A-zÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*((-|\s)*[_A-zÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ])*$/,
            'gm',
        );
        let names = reGex.test(name);
        return names;
    },
    validatePassword(password) {
        let regex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$\b/, 'g')
        let res = regex.test(password)
        return res
    },
    validMail(email) {
        // don't remember from where i copied this code, but this works.
        let re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email)) {
            // this is a valid email address
            // call setState({email: email}) to update the email
            // or update the data in redux store.
            return true;
        } else {
            // invalid email, maybe show an error to the user.
            return false;
        }
    },
    validateCodeResponse: (code) => {
        switch (code) {
            case AppConstants.code.CUSTOMER_HAD_EXIST_BUT_NOT_ACTIVE: {
                return strings(code)
            }
            case AppConstants.code.CUSTOMER_MAIL_EXIST: {
                return strings(code)
            }
            case AppConstants.code.CUSTOMER_MAIL_EXIST_OR_PHONE: {
                return strings(code)
            }
            case AppConstants.code.CUSTOMER_EXIST: {
                return strings(code)
            }
            case AppConstants.code.CUSTOMER_EXIST_NAME: {
                return strings(code)
            }
            case AppConstants.code.LOGIN_FAIL: {
                return strings(code)
            }
            default: {
                return 'invalid code!'
            }
        }
    }
}