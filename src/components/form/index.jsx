import React, { useEffect, useRef, useState } from "react";
import {
    AppState,
    FlatList,
    Keyboard,
    Pressable,
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration,
    View 
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../../style/styles";

import Result from "./result";

const Form = () => {
    const appState = useRef(AppState.currentState);
    
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [message, setMessage] = useState("Fill in your height and weight");
    const [buttonMessage, setButtonMessage] = useState("Calculate BMI");
    const [bmi, setBmi] = useState(null);
    const [heightErrorMessage, setHeightErrorMessage] = useState(null);
    const [weightErrorMessage, setWeightErrorMessage] = useState(null);
    const [bmiList, setBmiList] = useState([]);

    useEffect(() => {
        const appChangeListener = AppState.addEventListener("change", handleAppStateChange);
    }, []);

    const handleAppStateChange = async nextAppState => {
        if(appState.current.match(/inactive|background/) && nextAppState === "active"){
            console.log("Abriu!");
        }else{
            console.log("Fechou!");
        }
        appState.current = nextAppState;
    }

    const storeLastResults = async () => {
        await AsyncStorage.setItem("RESULTS", bmiList);
    }

    const retrieveLastResults = async () => {
        let storedValue = await AsyncStorage.getItem("RESULTS");
        setBmiList(storedValue);
    }

    const processData = () => {
        if(buttonMessage == "Calculate again"){
            setButtonMessage("Calculate BMI");
        }
        if(weight != null && 
           height != null &&
           weight != 0 &&
           height != 0){
            let processedWeight = weight.replace(",", ".");
            let processedHeight = height.replace(",", ".");
            let newBmi = calculateBmi(processedWeight, processedHeight);
            setMessage("Your BMI is: ");
            setBmi(newBmi);
            refreshList(newBmi);
            setButtonMessage("Calculate again");
        }else{
            if(buttonMessage == "Calculate BMI"){
                Vibration.vibrate(10000);
            }
            setMessage("Fill in your height and weight");
            setBmi(null);
        }
        if(buttonMessage == "Calculate BMI"){
            handleErrorMessages();
        }
        setHeight(null);
        setWeight(null);
        Keyboard.dismiss();
    }

    const calculateBmi = (weight, height) => {
        let result = weight/(height*height);
        result = result.toFixed(2);
        return result;
    }

    const refreshList = (currentBmi) => {
        let timeOfResult = new Date();
        let newBmiList = [{id: timeOfResult.getTime(), bmi: currentBmi, date: timeOfResult.toLocaleString("en-US", {month: "long", day: "2-digit", year: "numeric"}), time: timeOfResult.toLocaleString("en-GB", {hour: "2-digit", minute: "2-digit"})}, ...bmiList]
        if(newBmiList.length > 10){
            newBmiList.pop();
        }
        setBmiList(newBmiList);
    }

    const handleErrorMessages = () => {
        if(height == null){
            setHeightErrorMessage("This field is required");
        }else if(height == 0 || height == 0.0){
            setHeightErrorMessage("Invalid value");
        }else{
            setHeightErrorMessage(null);
        }

        if(weight == null){
            setWeightErrorMessage("This field is required");
        }else if(weight == 0 || weight == 0.0){
            setWeightErrorMessage("Invalid value");
        }else{
            setWeightErrorMessage(null);
        }
    }

    return (
        <View style={styles.formContext}>
            {bmi == null ? (
                <Pressable onPress={Keyboard.dismiss}>
                    <View style={styles.formContainer}>
                        <Text style={styles.inputLabel}>Height (m) <Text style={{color: "#FF0043"}}> *</Text></Text>
                        <Text style={styles.errorMessage}>{heightErrorMessage}</Text>
                        <TextInput style={styles.inputField}
                                onChangeText={setHeight}
                                value={height}
                                placeholder="Ex: 1.78"
                                placeholderTextColor="#B0B0B0"
                                keyboardType="numeric"
                                />
                        <Text style={styles.inputLabel}>Weight (Kg)<Text style={{color: "#FF0043"}}> *</Text></Text>
                        <Text style={styles.errorMessage}>{weightErrorMessage}</Text>
                        <TextInput style={styles.inputField}
                                onChangeText={setWeight}
                                value={weight}
                                placeholder="Ex: 68.3"
                                placeholderTextColor="#B0B0B0"
                                keyboardType="numeric"
                                />
                        <TouchableOpacity 
                            style={styles.defaultButton}
                            onPress={processData}
                        >
                            <Text style={styles.buttonText}>Calculate BMI</Text>
                        </TouchableOpacity>
                        <Text style={styles.resMsg}>{message}</Text>
                    </View>
                </Pressable>) : (
                    <Pressable onPress={Keyboard.dismiss}>
                        <View style={styles.formContext}>
                            <Text style={styles.resMsg}>{message}</Text>
                            <Result bmiValue={bmi}
                            />
                            <TouchableOpacity style={styles.defaultButton}
                                            onPress={processData}>
                                <Text style={styles.buttonText}>{buttonMessage}</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>)}
            <FlatList
                style={styles.bmiList}
                data={bmiList}
                renderItem={({item}) => {
                    return (
                        <View style={styles.bmiListItem}>
                            <Text style={styles.bmiListHead}>
                                BMI Result on {item.date} at {item.time}
                            </Text>
                            <Text style={styles.bmiListResult}>
                                {item.bmi}
                            </Text>
                        </View>
                    );
                }}
                keyExtractor={(item) => {
                    return item.id;
                }}
            />
        </View>
    );
}

export default Form;