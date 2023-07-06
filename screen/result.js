import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View style = {styles.container}>
      <Text>Result</Text>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 20,
    paddingTop: 40,
  }
})