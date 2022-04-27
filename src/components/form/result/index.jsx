import React from "react";

import { Share, Text, TouchableOpacity, View } from "react-native";
import styles from "../../../style/styles";

const Result = ({ bmiValue, resMsg, shareMsg }) => {
    const shareAction = async () => {
        return await Share.share({
            message: `My current BMI is ${bmiValue}. Check yours now using my BMI Calculator: exp://7b-zc2.anonymous.onebithealth.exp.direct:80`
        });
    }
    
    return (
        <View style={styles.msgContainer}>
            <Text style={styles.result}>{bmiValue}</Text>
            <TouchableOpacity style={styles.shareButton}onPress={shareAction}>
                <Text style={styles.shareText}>Share Results</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Result;