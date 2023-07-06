import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuBar = () => {
  return (
    <View style = {styles.menubar}>
      <Text style={{color:'white', justifyContent:'center', fontSize:20, padding: 20}}>Timer</Text>
      <Text style={{color:'white', justifyContent:'center', fontSize:20, padding: 20}}>Score</Text>
    </View>
  )
}

export default MenuBar

const styles = StyleSheet.create({
    menubar:{
        height: 60,
        backgroundColor: "#274c77",
        width: '100%',
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: "space-evenly"

    }
})