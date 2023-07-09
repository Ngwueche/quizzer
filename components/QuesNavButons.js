import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect} from "react";
import { getQuiz, getNextQuestion } from "../utils";
import Questions from "./Questions";


const QuesNavButons = ({ navigation }) => {
  const [question, setQuestion] = useState()
  const [quesNum, setQuesNum] = useState(0);
  const [num, setNum] = useState();

  const Quiz = async ()=>{
    const q =  await getQuiz();
    setQuestion(q)
    setNum(q.length)
  }

  const handleNextPress = async () =>{
    setQuesNum(quesNum+1)

  }

  const handlePrevPress = () =>{
    setQuesNum(quesNum-1)
  }

    useEffect(() => {
      Quiz();
    }, []);

  return (
    <View style={styles.bottons}>
      <TouchableOpacity style={styles.botton} onPress={handlePrevPress}>
        <Text style={styles.text}>Prev</Text>
      </TouchableOpacity>
    {quesNum !== (num -1) &&
        <TouchableOpacity style={styles.botton} onPress={handleNextPress}>
          <Text style={styles.text} >
            Next
          </Text>
        </TouchableOpacity>
    }
    {quesNum === (num-1) &&
        <TouchableOpacity style={styles.botton} onPress={null}>
          <Text style={styles.text} >
            Result
          </Text>
        </TouchableOpacity>
    }

      {/* <TouchableOpacity onPress={()=>navigation.navigate('Home')} >
          <Text style={styles.botton}>End Quiz</Text>
        </TouchableOpacity> */}
    </View>
  );
};

export default QuesNavButons;

const styles = StyleSheet.create({
  bottons: {
    flexDirection: "row",
    marginBottom: 12,
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  botton: {
    width: "35%",
    alignItems: "center",
    borderRadius: 16,
    padding: 12,
    backgroundColor: "#004E98",
  },
  text: {
    fontSize: 25,
    fontWeight: 800,
    color: "white",
    letterSpacing: 2,
  },
});
