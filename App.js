import React from "react";
import { 
  StatusBar,
  View
} from 'react-native';

import Title from "./src/components/title/";
import Main from "./src/components/main/";

import styles from "./src/style/styles";

export default function App() {
  return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle={"light-content"} />
        <Title />
        <Main />
      </View>
  );
}