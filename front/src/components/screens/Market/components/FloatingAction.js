import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
  Pressable,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Header from '../../../header';
import {colors, icons, images} from '../../../constants';
import Animated, {
  withDelay,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {FloatingAction} from 'react-native-floating-action';

const actions = [
  {
    text: 'Book',
    icon: require('../../../../assets/icons/live.png'),
    name: 'bt_addBook',
    position: 2,
    color: colors.Quaternary,
    textBackground: colors.Quaternary, // Background color of the text label
    textColor: colors.white, // Text color
    marginBottom: -10,
  },

  {
    text: 'Ebook',
    icon: require('../../../../assets/icons/book2.png'),
    color: colors.Quaternary,
    textBackground: colors.Quaternary, // Background color of the text label
    textColor: colors.white, // Text color
    name: 'bt_addEbook',
    position: 1,
  },
  {
    text: 'Art',
    icon: require('../../../../assets/icons/plus.png'),
    color: colors.Quaternary,
    textBackground: colors.Quaternary, // Background color of the text label
    textColor: colors.white, // Text color
    name: 'bt_addArt',
    position: 3,
    showBackground: false,
  },
  {
    text: 'Exchange',
    icon: require('../../../../assets/icons/plus.png'),
    color: colors.Quaternary,
    textBackground: colors.Quaternary, // Background color of the text label
    textColor: colors.white, // Text color
    name: 'bt_addExchange',
    position: 3,
    showBackground: false,
  },
];
const FloatingActions = () => {
  const isExpanded = useSharedValue(false);

  const handlePress = () => {
    isExpanded.value = !isExpanded.value;
  };
  const navigation = useNavigation();

  
  return (
    <View
      style={{
        height: 0,
        position: 'fixed',
        marginBottom: 50,
        marginTop: -100,
      }}>
      <FloatingAction
        color={colors.Quaternary}
        showBackground={false}
        actions={actions}
        shadow={{
          shadowOpacity: 0.35,
          shadowOffset: {width: 0, height: 5},
          shadowColor: '#fff',
          shadowRadius: 3,
        }}
        onPressItem={name => {
          if (name === 'bt_addEbook') {
            navigation.navigate('AddEBookMarket');
          } else if (name === 'bt_addBook') {
            navigation.navigate('AddBookMarket');
          } else if (name === 'bt_addArt') {
            navigation.navigate('AddArtMarket');
          } else if (name === 'bt_addExchange') {
            navigation.navigate('AddExchangeMarket');
          }
        }}
      />
    </View>
  );
};

export default FloatingActions;

const styles = StyleSheet.create({
  content: {
    color: '#f8f9ff',
    fontWeight: 500,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
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
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 16,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginRight: 24,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a73e8',
  },
  tabText: {
    marginLeft: 4,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#1a73e8',
  },
  content: {
    flex: 1,
  },
  storiesContainer: {
    padding: 16,
  },
  storyItem: {
    marginRight: 16,
  },
  storyImageContainer: {
    width: 100,
    height: 150,
    borderRadius: 10,
    padding: 2,
    backgroundColor: '#1a73e8',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  createStoryButton: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    backgroundColor: '#1a73e8',
    borderRadius: 50,
    height: 35,
    width: 35,
    padding: 5,
  },
  posts: {
    padding: 16,
  },
  post: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postHeaderText: {
    marginLeft: 12,
  },
  author: {
    fontWeight: '600',
    fontSize: 14,
  },
  time: {
    color: '#666',
    fontSize: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 12,
  },
  bookImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginTop: 12,
  },
  bookPreview: {
    flexDirection: 'row',
    marginTop: 12,
  },
  bookCoverImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 16,
  },
  bookTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  bookDescription: {
    color: '#666',
    marginTop: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navButton: {
    padding: 8,
  },
});
