import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../Screens/SplashScreen';
import Dashboard from '../Screens/Dashboard';
import ABC from '../Screens/ABC';
import Numbering from '../Screens/Numbering';
import Colors from '../Screens/Colors';
import GeneralKnowledge from '../Screens/GeneralKnowlegde';
import GKShapes from '../Screens/GkShapes';
import PartOfBody from '../Screens/PartsOfBody';
import FiveSenses from '../Screens/FiveSenses';
import Birds from '../Screens/Birds';
import Animals from '../Screens/Animal';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Letters" component={ABC} />
        <Stack.Screen name="Numbering" component={Numbering} />
        <Stack.Screen name="Colors" component={Colors} />
        <Stack.Screen name="GeneralKnowledge" component={GeneralKnowledge} />
        <Stack.Screen name="Animals" component={Animals} />
        <Stack.Screen name="Birds" component={Birds} />
        <Stack.Screen name="FiveSenses" component={FiveSenses} />
        <Stack.Screen name="PartOfBody" component={PartOfBody} />
        <Stack.Screen name="GKShapes" component={GKShapes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
