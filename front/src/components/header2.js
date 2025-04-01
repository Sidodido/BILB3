import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors, icons, images} from './constants';

import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const scale = width / 420;

const header = ({title, onPress}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={{
              height: 25 * scale,
              width: 25 * scale,
              marginTop: 20,
              tintColor: colors.Quaternary,
            }}
            source={icons.back}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            style={{
              height: 70 * scale,
              width: 100 * scale,
              marginBottom: 5,
            }}
            source={images.LOGO2}
          />

          <Text
            style={{
              fontSize: 25 * scale,
              textAlign: 'center',
              color: colors.black,
            }}>
            {title}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={{
              height: 25 * scale,
              width: 25 * scale,
              marginTop: 20,
              tintColor: colors.Quaternary,
            }}
            source={icons.options}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 16 * scale,
    paddingHorizontal: 20 * scale,
    backgroundColor: colors.white,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  iconContainer: {
    height: 45 * scale,
    width: 45 * scale,
    borderRadius: 50 * scale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0 * scale,
  },
  icon: {
    height: 30 * scale,
    width: 30 * scale,
    marginTop: 13,

    tintColor: colors.Quaternary,
  },
  exit: {
    height: 24 * scale,
    width: 24 * scale,
    tintColor: colors.tertiary,
    marginLeft: -30,
    marginRight: 20,
  },
  deleteButton: {
    position: 'absolute',
    right: 10 * scale,
    top: 10 * scale,
  },
  deleteIcon: {
    height: 20 * scale,
    width: 20 * scale,
    tintColor: colors.error,
  },
});

export default header;
