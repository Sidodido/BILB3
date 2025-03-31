import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,

} from 'react-native';
import {colors, icons, images} from '../../../constants';

const news = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('News')}>
      <View style={styles.whatsNew}>
        <View style={styles.whatsNewIcon}>
          <Image
            source={images.news}
            size={10}
            style={{
              width: 25,
              height: 13,
              tintColor: colors.white,
            }}
          />
        </View>

        <Text style={styles.whatsNewText}>WHAT'S NEW ?</Text>
      </View>
    </TouchableOpacity>
  );
};

export default news;
const styles = StyleSheet.create({
  whatsNew: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  whatsNewIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#1a73e8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  whatsNewIconText: {
    color: 'white',
    fontSize: 12,
  },
  whatsNewText: {
    color: '#1a73e8',
    fontWeight: '600',
  },
});
