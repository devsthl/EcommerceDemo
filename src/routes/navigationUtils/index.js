// import { Actions } from "react-native-router-flux";

export default {
    resetApp() {
        Actions.reset('flash_screen');
    },
};

export const jump = (routeName, params) => {
    Actions.jump(routeName, params)
}

export const jumpAndClearCache = (routeName, params) => {
    Actions.reset(routeName, params)
}

export const goBack = () => {
    Actions.pop()
}
