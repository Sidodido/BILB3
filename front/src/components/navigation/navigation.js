import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';

import {
  Apparailes,
  Home,
  Parametres,
  Statistiques,
  Recherche,
  Welcome2,
  Welcome,
  SignIn,
  OTP,
  LogIn,
  MusicPlayer
} from '../screens';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="MusicPlayer">
        <Stack.Screen name="Main" component={DrawerNavigation} />
        <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
        <Stack.Screen name="Welcome2" component={Welcome2} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="LogIn" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
