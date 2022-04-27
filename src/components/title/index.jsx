import React from "react";
import { 
    Keyboard,
    Pressable,
    Text, 
    View
} from "react-native";

import styles from "../../style/styles";

const Title = () => {
    return (
        <View style={styles.titleContainer}>
            <Pressable onPress={Keyboard.dismiss}>
                <Text style={styles.title}>BMI Calculator</Text>
            </Pressable>
        </View>
    );
}

export default Title;