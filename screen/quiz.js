import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Quiz() {
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={{fontSize:20, fontWeight:600, }}> Imagine this is a real quetion?</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Option A</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option B</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option C</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option D</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottons}>
        <TouchableOpacity>
          <Text style={styles.botton}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.botton}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: "100%",
  },
  question: {
    marginVertical: 16,

  },
  options: {
    marginVertical: 16,
    flex: 1,

  },
  bottons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
    marginHorizontal: 12,

  },
  botton: {
    backgroundColor: 'blue',
    fontSize: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    color: 'white',
    borderBottomLeftRadius: 20,
    letterSpacing: 4,

  },

});
