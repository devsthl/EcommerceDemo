import { Dimensions, PixelRatio, Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';
import Colors from "../assets/colors/Colors";

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const screenSizeByInch =
    (Math.sqrt(Math.pow(widthScreen, 2) + Math.pow(heightScreen, 2)) /
        (PixelRatio.get() * 160)) * 2;
const X =
    (widthScreen < heightScreen ? widthScreen : heightScreen) /
    (screenSizeByInch < 7 ? 9.25 : 12);
const marginHorizontal = 32;
const marginHorizontalAll = X * 0.6;
const marginHorizontal20 = X * 0.47;
const widthScreenMg24 = widthScreen - marginHorizontalAll * 2;
const IS_IOS = Platform.OS === 'ios';
const marginTopAll = X * 0.6;

export default {
    IS_IOS: IS_IOS,
    IS_TABLET: DeviceInfo.isTablet(),
    constants: {
        widthScreen,
        heightScreen,
        X,
        widthScreenMg24,
        marginTopAll
    },
    X: X,
    marginHorizontal: marginHorizontal,
    marginTop16: 16,
    marginTop20: 20,
    marginTop: 10,
    width: widthScreen - marginHorizontal,
    height: heightScreen,
    spaceItem20: X * 0.5,
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundScreen,
        flexDirection: 'column',

    },
    icons: {},
    toolbar: {
        toolbar: {
            paddingTop: X,
            paddingHorizontal: X * 0.6,
            backgroundColor: Colors.tabActive,
            width: '100%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
        },
        toolbarText: {
            marginTop: X,
        },
    },
    button: {
        buttonCart: {
            height: X,
            padding: 5,
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonLogin: {
            width: widthScreen - 48,
            height: X * 1.2,
            marginHorizontal: 24,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    input: {
        inputLogin: {
            minHeight: 50,
            flexDirection: 'row',
            width: widthScreenMg24,
            backgroundColor: '#F5F2FF',
            alignItems: 'center',
            borderRadius: 12,
            color: Colors.tabBlack,
            // textDecoration: 'none',
            paddingHorizontal: 11.47,
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
        },
        codeInput: {
            // height: X * 1.1,
            height: X * 1.1,
            backgroundColor: Colors.white,
            borderRadius: 12,
            borderColor: Colors.borderItemHome,
            paddingVertical: 15,
            justifyContent: 'center',
            paddingLeft: 10,
            color: Colors.tabBlack,
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
            ...Colors.box,
        },
    },
    textButton: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    text8: {
        fontSize: 8,
        fontWeight: '400',
        color: Colors.textNameProductColor,
    },
    text10: {
        fontSize: 11,
        fontWeight: '400',
        color: Colors.primariColor,
    },
    text11: {
        fontSize: 11,
        fontWeight: '400',
        color: Colors.primariColor,
    },
    text14: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.textNormalColor,
    },
    text15: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.textNormalColor,
    },
    text16: {
        color: Colors.primary_color,
        fontSize: 16,
        fontWeight: '600',
    },
    text24: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 36,
        color: Colors.white,
    },
    text18: {
        fontWeight: '500',
        fontSize: 18,
        color: Colors.primariColor,
    },
    text19: {
        fontWeight: '500',
        fontSize: 19,
    },
    text20: {
        fontSize: 20,
        color: Colors.white,
    },
    text28: {
        fontSize: 28,
        color: Colors.primariColor,
        fontWeight: 'bold',
    },
    text36: {
        fontSize: 36,
        color: Colors.primariColor,
        fontWeight: 'bold',
    },
    text12: {
        color: Colors.textColorWhite,
        fontWeight: '500',
        fontSize: 12,
        letterSpacing: 0.02,
    },
    text45: {
        fontSize: 45,
    },
    box: {
        shadowColor: 'rgba(0,0,0,0.5)',
        borderColor: 'rgba(0,0,0,0.5)',
        borderWidth: IS_IOS ? 0 : 0,
        backgroundColor: Colors.backgroundScreen,
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 3,
    },
    row: {
        width: widthScreen - marginHorizontal,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        iconCart: {
            width: 20,
            height: 20,
        },
        iconLogoSmall: {
            width: X * 3,
            height: X * 1.5,
        },
        iconLogoBig: {
            width: X * 4,
            height: X * 2,
        },
        iconOrder: {
            width: X * 0.6,
            height: X * 0.6,
        },
        iconShow: {
            width: X * 0.9,
            height: X * 0.9,
        },
        icon_avatar: {
            width: X * 1.7,
            height: X * 1.7,
            borderRadius: X * 1.7,
            borderWidth: 1,
            borderColor: Colors.white,
            backgroundColor: 'transparent',
        },
        avatarGroup: {
            width: X * 1.9,
            height: X * 1.9,
            borderRadius: X * 1.9,
            borderWidth: 1,
            borderColor: Colors.tabBlack,
            backgroundColor: 'transparent',
        },
        icon_notification: {
            width: X,
            height: X,
            justifyContent: 'center',
            alignSelf: 'center',
        },
        iconProfile: {
            width: X * 0.4,
            height: X * 0.4,
        },
        iconGroup: {
            width: X * 0.8,
            height: X * 0.8,
        },
        imgGroup: {
            width: X * 1.3,
            height: X * 1.3,
        },
        img_avatar: {
            width: X * 2.8,
            height: X * 2.8,
        },
        img_comment: {
            width: X * 1.9,
            height: X * 1.9,
        },
        img_product: {
            width: X * 2.5,
            height: X * 3,
        },
    },
    widthItem: {
        width: widthScreen - marginHorizontal,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
};