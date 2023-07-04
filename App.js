import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Title from "./components/Title";
import Home from "./screen/Home";
import Quiz from "./screen/quiz";
import Result from "./screen/result";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 48,
    justifyContent: "space-between",

  },
  text: {
    fontSize: 30,
    fontWeight: 800,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    backgroundColor: 'blue',
    textAlign: "center",
  },
});

export default App;
