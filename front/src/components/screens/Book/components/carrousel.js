import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import books from '../data/books';

const Carrousel = ({onBookSelect}) => {
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
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: 160,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 220,
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  selectedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Carrousel;
