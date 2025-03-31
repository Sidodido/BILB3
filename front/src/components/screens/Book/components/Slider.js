import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
} from 'react-native';
import React from 'react';
import CustomImageCarousal from './CustomImageCarousal';

const App = ({navigation}) => {
  const data2 = [
    {
      id: 1,
      image: require('../../../../assets/BilbPhotos/livre3.png'),
    },
    {
      id: 2,

      image: require('../../../../assets/BilbPhotos/livre4.png'),
    },
    {
      id: 3,

      image: require('../../../../assets/BilbPhotos/livre5.png'),
    },

    {
      id: 4,

      image: require('../../../../assets/BilbPhotos/livre7.png'),
    },
    {
      id: 5,

      image: require('../../../../assets/BilbPhotos/livre8.png'),
    },
    {
      id: 6,

      image: require('../../../../assets/BilbPhotos/livre9.png'),
    },
    {
      id: 7,
      image: require('../../../../assets/BilbPhotos/livre10.png'),
    },
    {
      id: 8,

      image: require('../../../../assets/BilbPhotos/livre11.png'),
    },
    {
      id: 9,

      image: require('../../../../assets/BilbPhotos/livre12.png'),
    },
    {
      id: 10,

      image: require('../../../../assets/BilbPhotos/livre13.png'),
    },
    {
      id: 11,

      image: require('../../../../assets/BilbPhotos/livre14.png'),
    },
    {
      id: 12,

      image: require('../../../../assets/BilbPhotos/livre15.png'),
    },
    {
      id: 13,

      image: require('../../../../assets/BilbPhotos/livre16.png'),
    },
    {
      id: 14,

      image: require('../../../../assets/BilbPhotos/livre1.png'),
    },
    {
      id: 15,

      image: require('../../../../assets/BilbPhotos/livre2.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View key={data2.id}>
          <CustomImageCarousal
            data={data2}
            autoPlay={true}
            navigation={navigation}
          />
          <Text>{data2.title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
  text: {textAlign: 'center', color: 'black', marginBottom: 10},
  carouselContainer: {
    marginBottom: 0,
  },
});
