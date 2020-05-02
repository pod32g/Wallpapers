import { StyleSheet } from "react-native";
import { theme } from "../../theme/customTheme";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        height: "100%",
        width: "100%",
    },
    itemContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    footer: {
        width: "100%",
        marginBottom: "15%",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
})