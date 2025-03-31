import {View, Text, Image, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Ebook,
  Home,
  Market,
  Book,
  Community,
} from '../screens';
import {colors, icons, images} from '../constants';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    elevation: 0,

    height: Platform.OS === 'ios' ? 100 : 70,
    backgroundColor: colors.white,
  },
  headerShown: false,
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      style={{alignItems: 'center'}}
      initialRouteName="DrawerHome"
      screenOptions={screenOptions}>
      <Tab.Screen
        name="community"
        component={Community}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={images.community}
                resizeMode="contain"
                style={{
                  marginTop: 32,
                  height: 30,
                  width: 30,
                  tintColor: focused ? colors.Quaternary : colors.tertiary,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="book"
        component={Book}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.book2}
                resizeMode="contain"
                style={{
                  marginTop: 32,
                  height: 30,
                  width: 30,
                  tintColor: focused ? colors.Quaternary : colors.tertiary,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="DrawerHome"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',

                  backgroundColor: focused
                    ? colors.Quaternary
                    : colors.Quaternary,
                  marginTop: 32,
                  height: Platform.OS === 'ios' ? 70 : 50,
                  width: Platform.OS === 'ios' ? 70 : 80,
                  borderRadius: Platform.OS === 'ios' ? 35 : 30,
                  borderColor: focused ? colors.secondary : colors.Quaternary,
                }}>
                <Image
                  source={images.home}
                  resizeMode="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? colors.white : colors.white,
                  }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="market"
        component={Market}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={images.store}
                resizeMode="contain"
                style={{
                  marginTop: 32,
                  height: 30,
                  width: 30,
                  tintColor: focused ? colors.Quaternary : colors.tertiary,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Ebook"
        component={Ebook}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.book1}
                resizeMode="contain"
                style={{
                  marginTop: 32,
                  height: 30,
                  width: 30,
                  tintColor: focused ? colors.Quaternary : colors.tertiary,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
     
  );
};

export default BottomNavigation;
