import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Switch} from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420;

export default function Welcome({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}></View>
          <Image
            source={images.LOGO}
            style={{width: 350, height: 280, marginBottom: 50}}
          />

          <Button
            style={{
              width: 170 * scale,
              backgroundColor: colors.Quaternary,
              marginHorizontal: 'auto',
              borderRadius: 10,
              color: colors.white,
              marginBottom: 50,
            }}
            mode="contained"
            onPress={() => navigation.navigate('Welcome2')}>
            <Text
              style={{
                color: colors.white,
                fontSize: 17 * scale,
                fontWeight: 'bold',
              }}>
              start
            </Text>
          </Button>
        </View>
      </View>
      <Image
        source={images.etudiant}
        style={{width: 450, height: 280, bottom: 0, position: 'fixed'}}
      />
    </SafeAreaView>
  );
}
