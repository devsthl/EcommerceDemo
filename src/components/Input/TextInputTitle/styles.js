import Colors from "../../../assets/colors/Colors"
import Styles from "../../../base/Styles"

const X = Styles.constants.X
export default {
    container: {
        width: '100%',
        alignSelf: 'center',
        marginTop: X / 5
    },
    textInput: {
        ...Styles.input.codeInput,
        paddingVertical: 10,
        paddingLeft: 10,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        backgroundColor: Colors.tabWhite,
        elevation: 2,

    },
    title: {
        ...Styles.text15,
        color: Colors.tabBlack,
    }
}