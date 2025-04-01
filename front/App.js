import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './src/components/navigation/DrawerNavigation';

import {
  News,
  Recherche,
  Welcome2,
  Welcome,
  SignIn,
  OTP,
  LogIn,
  PdfReader,
  MusicPlayer,
  AddBook,
  AddPost,
  AddStory,
  AddBookMarket,
  AddArtMarket,
  AddExchangeMarket,
  AddEBookMarket,
  CashPaiment,
  DahabiaPaiment,
  DonePaiment,
  Epaiment,
  PaymentCategory,
} from './src/components/screens';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main">
        <Stack.Screen name="Main" component={DrawerNavigation} />
        <Stack.Screen name="PdfReader" component={PdfReader} />
        <Stack.Screen name="AddPost" component={AddPost} />
        <Stack.Screen name="AddStory" component={AddStory} />
        <Stack.Screen name="AddBook" component={AddBook} />
        <Stack.Screen name="AddBookMarket" component={AddBookMarket} />
        <Stack.Screen name="AddEBookMarket" component={AddEBookMarket} />
        <Stack.Screen name="AddArtMarket" component={AddArtMarket} />
        <Stack.Screen name="AddExchangeMarket" component={AddExchangeMarket} />
        <Stack.Screen name="CashPaiment" component={CashPaiment} />
        <Stack.Screen name="DahabiaPaiment" component={DahabiaPaiment} />
        <Stack.Screen name="DonePaiment" component={DonePaiment} />
        <Stack.Screen name="Epaiment" component={Epaiment} />
        <Stack.Screen name="PaymentCategory" component={PaymentCategory} />

        <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
        <Stack.Screen name="Welcome2" component={Welcome2} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
