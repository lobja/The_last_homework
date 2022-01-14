import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import Games from "./Games"



export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    
     <NavigationContainer>
          <Stack.Navigator>
              
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Games" component={Games} />
             
          </Stack.Navigator>
    </NavigationContainer>
   
  );
}


