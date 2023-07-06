import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const QuesNavButons = ({navigation}) => {
  return (

       <View style={styles.bottons}>
        <TouchableOpacity style={styles.botton}>
          <Text style={styles.text}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botton}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>navigation.navigate('Home')} >
          <Text style={styles.botton}>End Quiz</Text>
        </TouchableOpacity> */}
      </View>
  )
}

export default QuesNavButons

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
})