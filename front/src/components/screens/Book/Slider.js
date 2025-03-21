import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
} from 'react-native';
import React from 'react';
import CustomImageCarousal from './src/components/CustomImageCarousal';

const App = () => {
  
  const data2 = [
    {
      image: require('../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      image: require('../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      image: require('../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      image: require('../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      image: require('../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      image: require('../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      image: require('../../../assets/BilbPhotos/livre-(16).png'),
    },
    {
      image: require('../../../assets/BilbPhotos/livre-(16).png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.carouselContainer}>
        <CustomImageCarousal data={data2} autoPlay={true}  />
        <Text >{data2.title}</Text>
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
