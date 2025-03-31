import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {
  Profile,
  Parameters,
  News,
  HistoryOfPaiment,
  PremiumMode,
  ContactUs,
  FeedBack,
  Orders,
  MusicPlayer
} from '../screens';
import BottomNavigation from './BottomNavigation';
import {View, Text, Image, Platform, Button} from 'react-native';
import {colors, icons, images} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.Quaternary,
              }}>
              <Image
                source={images.avatar}
                style={{
                  height: 100,
                  width: 100,
                  marginBottom: 6,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: colors.white,
                }}>
                Zidane Sidahmed
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.white,
                }}>
                Admin
              </Text>
            </View>

            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 250,
        },
        headerStyle: {
          backgroundColor: colors.Quaternary,
          height: 60,
          borderRadius: 0,
        },
        headerShown: false,
        headerTintColor: colors.Quaternary,
        drawerLabelStyle: {
          color: colors.black,
          fontSize: 14,
          marginLeft: -10,
        },
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={images.home2}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  marginRight: 10,
                  tintColor: colors.Quaternary,
                }}
              />
            );
          },
        }}
        component={BottomNavigation}
      />
      <Drawer.Screen
        name="MusicPlayer"
        options={{
          drawerLabel: 'Music Player',
          title: 'Music Player',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={images.aPropos}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  marginRight: 10,

                  tintColor: colors.Quaternary,
                }}
              />
            );
          },
        }}
        component={MusicPlayer}
      />

      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={images.aPropos}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  marginRight: 10,

                  tintColor: colors.Quaternary,
                }}
              />
            );
          },
        }}
        component={Profile}
      />

      <Drawer.Screen
        name="Orders"
        options={{
          drawerLabel: 'Orders',
          title: 'Orders',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={images.orders}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  marginRight: 10,

                  tintColor: colors.Quaternary,
                }}
              />
            );
          },
        }}
        component={Orders}
      />

      <Drawer.Screen
        name="News"
        options={{
          drawerLabel: 'News',
          title: 'News',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={images.news}
                resizeMode="contain"
                style={{
                  height: 24,
                  marginRight: 10,
                  width: 24,
                  tintColor: colors.Quaternary,
                }}
              />
            );
          },
        }}
        component={News}
      />

      <Drawer.Screen
        name="History of paiment"
        options={{
          drawerLabel: 'History of paiment',
          title: 'History of paiment',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={images.history}
                resizeMode="contain"
                style={{
                  height: 24,
                  marginRight: 10,
                  width: 24,
                  tintColor: colors.Quaternary,
                }}
              />
            );
          },
        }}
        component={HistoryOfPaiment}
      />

      <Drawer.Screen
        name="Parameters"
        options={{
          drawerLabel: 'Parameters',
          title: 'Parameters',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={images.parameters}
                resizeMode="contain"
                style={{
                  height: 24,
                  marginRight: 10,
                  width: 24,
                  tintColor: colors.Quaternary,
                }}
              />
            );
          },
        }}
        component={Parameters}
      />

      <Drawer.Screen
        name="Premium mode"
        options={{
          drawerLabel: 'Premium mode',
          title: 'Premium mode',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={images.pro}
                resizeMode="contain"
                style={{
                  height: 24,
                  marginRight: 10,
                  width: 24,
                  tintColor: colors.Quaternary,
                }}
              />
            );
          },
        }}
        component={PremiumMode}
      />

      <Drawer.Screen
        name="Contact us"
        options={{
          drawerLabel: 'Contact us',
          title: 'Contactus',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={images.contact}
                resizeMode="contain"
                style={{
                  height: 24,
                  marginRight: 10,
                  width: 24,
                  tintColor: colors.Quaternary,
                }}
              />
            );
          },
        }}
        component={ContactUs}
      />

      <Drawer.Screen
        name="Feed back"
        options={{
          drawerLabel: 'Feed back',
          title: 'Feed back',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={images.feedback}
                resizeMode="contain"
                style={{
                  height: 24,
                  marginRight: 10,
                  width: 24,
                  tintColor: colors.Quaternary,
                }}
              />
            );
          },
        }}
        component={FeedBack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
