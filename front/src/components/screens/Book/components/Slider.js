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

const App = () => {
  const data2 = [
    {
      id: 1,
      image: require('../../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      id: 2,

      image: require('../../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      id: 3,

      image: require('../../../../assets/BilbPhotos/livre-(16).png'),
    },

    {
      id: 4,

      image: require('../../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      id: 5,

      image: require('../../../../assets/BilbPhotos/livre-(1).png'),
    },
    {
      id: 6,

      image: require('../../../../assets/BilbPhotos/livre-(2).png'),
    },
    {
      id: 7,

      image: require('../../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      id: 8,

      image: require('../../../../assets/BilbPhotos/livre-(16).png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        <CustomImageCarousal data={data2} autoPlay={true} />
        <Text>{data2.title}</Text>
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
