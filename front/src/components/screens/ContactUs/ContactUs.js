import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {colors, icons, images} from '../../constants';
import {Dimensions} from 'react-native';
import Header from '../../header';
const {width} = Dimensions.get('window');
const scale = width / 420;

export default function ContactUs() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header title="Contact us" />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          alignItems: 'center',
        }}></View>
    </SafeAreaView>
  );
}
