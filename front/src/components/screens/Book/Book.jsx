import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {colors, icons, images} from '../../constants';
import {Dimensions} from 'react-native';
import Header from '../../header';
import Slider from './Slider';
import SlideItem from './SlideItem';
import Carrousel from './carrousel';
import CarrouselRounded from './carrouselRounded';

const {width} = Dimensions.get('window');
const scale = width / 420;

export default function books() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header title="Ebooks" />
      <ScrollView>
        <View
          style={{
            height: 400,
            marginBottom: 0,
          }}>
          <Slider />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 500,
            marginLeft: 15,
            marginBottom: 15,
            color: colors.Quaternary,
          }}>
          Popular on Bilb
        </Text>
        <CarrouselRounded />

        <Text
          style={{
            fontSize: 25,
            fontWeight: 500,
            marginLeft: 15,
            marginBottom: 15,
            color: colors.Quaternary,
          }}>
          Continue Reading
        </Text>
        <Carrousel />

        <Text
          style={{
            fontSize: 25,
            fontWeight: 500,
            marginLeft: 15,
            marginBottom: 15,
            color: colors.Quaternary,
          }}>
          Previews
        </Text>
        <Carrousel />

        <Text
          style={{
            fontSize: 25,
            fontWeight: 500,
            marginLeft: 15,
            marginBottom: 15,
            color: colors.Quaternary,
          }}>
          Trending Now
        </Text>
        <Carrousel />

        <Text
          style={{
            fontSize: 25,
            fontWeight: 500,
            marginLeft: 15,
            marginBottom: 15,
            color: colors.Quaternary,
          }}>
          New Releases
        </Text>
        <Carrousel />
      </ScrollView>
    </SafeAreaView>
  );
}
