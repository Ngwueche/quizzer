import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import data from "../assets/data/pharmacology_mcq.json"

const Questions = () => {
  const [checked, setChecked] = useState("");
  const handleRadioPress = (value) => {
    setChecked(value);
  };
  console.log(data)
  const getQuiz = ()=>{

  }
  useEffect(()=>{
    getQuiz()
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <View style={{ flexDirection: "row", paddingTop: 20, fontWeight: 600 }}>
          <Text style={{ fontSize: 28, fontWeight: 600 }}>
            Q1.
            {}
          </Text>
          <Text style={{ fontSize: 28, fontWeight: 600 }}>
            {" "}
            Imagine this is a really cool advanced question?
          </Text>
        </View>
      </View>
      {/* //this section is for question options */}
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.radioButtonContainer}
          onPress={() => handleRadioPress("option1")}
        >
          <View
            style={[
              styles.radioButton,
              checked === "option1" && styles.radioButtonChecked,
            ]}
          />
          <Text style={styles.radioButtonLabel}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioButtonContainer}
          onPress={() => handleRadioPress("option2")}
        >
          <View
            style={[
              styles.radioButton,
              checked === "option2" && styles.radioButtonChecked,
            ]}
          />
          <Text style={styles.radioButtonLabel}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioButtonContainer}
          onPress={() => handleRadioPress("option3")}
        >
          <View
            style={[
              styles.radioButton,
              checked === "option3" && styles.radioButtonChecked,
            ]}
          />
          <Text style={styles.radioButtonLabel}>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioButtonContainer}
          onPress={() => handleRadioPress("option4")}
        >
          <View
            style={[
              styles.radioButton,
              checked === "option4" && styles.radioButtonChecked,
            ]}
          />
          <Text style={styles.radioButtonLabel}>Option 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  question: {
    marginButtom: 12,
    fontSize: 28,
    marginTop: -20,
  },
  options: {
    marginVertical: 16,
  },
  optionButton: {
    paddingVertical: 12,
    marginTop: 12,
    backgroundColor: "#004E98",
    borderRadius: 12,
  },

  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 12,
    marginTop: 12,
    backgroundColor: "#004E98",
    borderRadius: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    marginLeft: 30,
  },
  radioButtonChecked: {
    backgroundColor: "white",
  },
  radioButtonLabel: {
    fontSize: 18,
    fontWeight: 500,
    color: "white",
    marginLeft: 10,
    paddingEnd: 12,
  },
});
