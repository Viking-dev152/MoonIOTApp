import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Screens/Login.js'
import Drawer from './Navigation/drawer.js'

const Stack = createStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name = "Login" component = {Login} />
        <Stack.Screen name = "Drawer" component = {Drawer} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}

