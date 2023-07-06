import React from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from "react-native";
// import homeImage from '../assets/Reading glasses-pana.png';
import HomeImage from "../assets/quizzerHome.png";
import Title from "../components/Title";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <View styles={styles.imageContainer}>
        <Image
          source={HomeImage}
          style={{ width: 400, height: 400 }}
          resizeMode='contain'
        />
      </View>
        <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
      <View style={styles.button}>
          <Text style={styles.text}>Start Quiz</Text>
      </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: "100%",
    alignItems: "center",
    borderRadius: 16,
    padding: 12,
    backgroundColor: "blue",
  },
  text: {
    fontSize: 30,
    fontWeight: 800,
    color: "white",
    letterSpacing: 2,
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

{
  /* <View>
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
      </View> */
}
