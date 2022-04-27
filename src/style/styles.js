import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 72,
        backgroundColor: "#292929",
        alignItems: "center",
        height: "100%"
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    title: {
        color: "#8BFF00",
        fontSize: 24,
        fontWeight: "bold",
    },
    //Styles for height and weight input fields and labels
    inputField: {
        backgroundColor: "#303030",
        borderRadius: 50,
        color: "#FFFFFF",
        fontWeight: "bold",
        margin: 12,
        padding: 10,
        width: "90%",
        height: 40
    },
    inputLabel: {
        alignSelf: "flex-start",
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 12
    },
    //Styles for Form Container
    formContext: {
        backgroundColor: "#202020",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        marginTop: 30,
        width: screenWidth,
        flex: 1
    },
    formContainer: {
        width: screenWidth,
        alignItems: "center",
        marginTop: 30,
        padding: 10,
    },
    //Styles for Calculate button
    defaultButton: {
        alignItems: "center",
        backgroundColor: "#8BFF00",
        borderRadius: 50,
        justifyContent: "center",
        marginTop: 18,
        marginBottom: 6,
        paddingVertical: 14,
        width: "90%"
    },
    buttonText: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold"
    },
    msgContainer: {
        alignItems: "center",
        marginVertical: 12,
        width: "100%"
    },
    //Style for BMI Result
    resMsg: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 12
    },
    result: {
        color: "#8BFF00",
        fontSize: 48,
        fontWeight: "bold"
    },
    //Style for "Invalid value" and "Required field"
    errorMessage: {
        alignSelf: "flex-start",
        color: "#FF0043",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 24,
        marginTop: 6 
    },
    //Share Button Styles - Grey, Rounded
    shareButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        marginVertical: 16,
        paddingHorizontal: 24,
        paddingVertical: 12
    },
    shareText: {
        color: "#000000",
        fontWeight: "bold"
    },
    //Style for results list
    bmiList: {
        flex: 1
    },
    bmiListItem: {
        backgroundColor: "#303030",
        borderRadius: 12,
        marginBottom: 6,
        padding: 12,
        width: 0.9 * screenWidth
    },
    bmiListHead: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    bmiListResult: {
        color: "#8BFF00",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 4,
        textAlign: "center"
    }
});

export default styles;