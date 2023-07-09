import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { getQuiz } from "../utils";
// import data from "../assets/data/pharmacology_mcq.json"

export const Questions = ({ navigation }) => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  const [questions, setQuestions] = useState();
  const [quesNum, setQuesNum] = useState(0);
  const [checked, setChecked] = useState("");
  const [options, setOptions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const handleRadioPress = (value) => {
    setChecked(value);
  };


const Quiz = async ()=>{
  setIsLoading(true)
  const q =  await getQuiz();
  setQuestions(q)
  console.log(q.correct_answer)
  setOptions(generateAndShuffleOptions(q[0]))
  setIsLoading(false)
}
  useEffect(() => {
    Quiz();
  }, []);

  const generateAndShuffleOptions = (_question) =>{
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options
    // console.log(options)
  }
  return (
    <View style={styles.container}>
      { isLoading ? (
        <ActivityIndicator size={60} color="#004E98" />
      ) : questions && (
        <View>
          <View style={styles.question}>
            <View
              style={{ flexDirection: "row", paddingTop: 20, fontWeight: 600 }}
            >
              <Text style={{ fontSize: 28, fontWeight: 600 }}>Q </Text>
              <Text style={{ fontSize: 28, fontWeight: 600 }}>
                {decodeURIComponent(questions[quesNum].question)}
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
              <Text style={styles.radioButtonLabel}>{decodeURIComponent(options[0])}</Text>
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
              <Text style={styles.radioButtonLabel}>{decodeURIComponent(options[1])}</Text>
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
              <Text style={styles.radioButtonLabel}>{decodeURIComponent(options[2])}</Text>
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
              <Text style={styles.radioButtonLabel}>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 6,
    // marginTop: 12,
    backgroundColor: "#gray",
    // borderRadius: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginLeft: 30,
  },
  radioButtonChecked: {
    backgroundColor: "black",
  },
  radioButtonLabel: {
    fontSize: 18,
    fontWeight: 500,
    color: "black",
    marginLeft: 10,
    paddingEnd: 12,
  },
});
