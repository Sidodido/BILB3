import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  Platform,
} from 'react-native';
import {colors, icons, images} from '../../../constants';

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <Image
        name="search"
        source={images.search}
        size={20}
        color="#666"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#666"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginHorizontal: 16,
    borderRadius: 25,
    padding: 5,
  },
  searchIcon: {
    marginLeft: 8,
    width: 25,
    height: 25,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
});
