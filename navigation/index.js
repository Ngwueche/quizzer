import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import Quiz from '../screen/quiz';
import Result from '../screen/result';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options = {{headerShown:false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options = {{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result} options = {{headerShown:false}}/>
    </Stack.Navigator>
  );
}