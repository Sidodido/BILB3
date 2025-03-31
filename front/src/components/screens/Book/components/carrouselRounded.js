import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {colors, icons, images} from '../../../constants';

import books from '../data/books';

const {width} = Dimensions.get('window');

const CarrouselRounded = ({onBookSelect}) => {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onBookSelect(item)}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={books}
        renderItem={renderItem}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: '#fff',
    height: 120,
    marginBottom: 20,
  },
  itemContainer: {
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 200,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: colors.Quaternary,
  },
});

export default CarrouselRounded;
