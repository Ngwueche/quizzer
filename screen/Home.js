import React from 'react'
import { Image, TouchableOpacity, StyleSheet, SafeAreaView, Text, View } from 'react-native'
// import homeImage from '../assets/Reading glasses-pana.png';
import HomeImage from "../assets/quizzerHome.png";
import Title from '../components/Title';


export default function Home({navigation}) {
  return (

    <SafeAreaView style={styles.container}>
    <Title />
    <View styles={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={HomeImage}
        style={{ width: 400, height: 400, }}
        resizeMode='contain'
      />
    </View>
    <View style={{ width: 200, justifyContent: 'center', alignSelf: 'center'}}>
      <TouchableOpacity onPress = {()=>navigation.navigate('Quiz')}>
        <Text style={styles.text}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {

        flexDirection: 'column', // 'column' is the default value
        justifyContent: 'center', // Align items vertically in the center
        alignItems: 'center', // Align items horizontally in the center

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
      borderRadius: 40,
      letterSpacing: 2


    },
  });


// const styles = StyleSheet.create({
//     bannerContianer: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 4
//     },
//     banner:{
//         height:300,
//         width:300
//     }
// })

{/* <View>
        <Title />
        <View style = {styles.bannerContianer}>
            <Image
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUiQ4zukzdyVwFSiDLKFH0gf9iR0-hFXc_Mw&usqp=CAU'
                }}
                style={styles.banner}
                resizeMode='contain'
            />
        </View>
        <TouchableOpacity>

        </TouchableOpacity>
      </View> */}
