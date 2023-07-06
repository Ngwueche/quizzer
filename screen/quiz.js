import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Questions from "../components/Questions";
import QuesNavButons from "../components/QuesNavButons";
// import { RadioButton } from "react-native-paper";
import MenuBar from "../components/MenuBar";

export default function Quiz({ navigation }) {
  return (
    <View style={styles.Maincontainer}>
      <MenuBar />
      <View style={styles.container}>
        <Questions />
        <QuesNavButons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Maincontainer:{
    height: "100%",
    justifyContent: "space-around"
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
