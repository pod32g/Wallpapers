import { StyleSheet } from "react-native";

const width = 100;
const height = 100;

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        paddingLeft: 5,
        width: width,
        height: height
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: "white",
        fontSize: 15,
        textShadowColor: "black",
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 2,
        fontWeight: "bold"
    },
    image: {
        width: width,
        height: height,
        resizeMode: "contain"
    }
});
