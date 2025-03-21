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
  Dimensions,
  FlatList,
} from 'react-native';
import Header from '../../header';
import {colors, icons, images} from '../../constants';
import books from './data';

const numColumns = 2;
const size = Dimensions.get('window').width / numColumns;

export default function Market() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    {key: 'All', label: 'All'},
    {key: 'Ebooks', label: 'Ebooks'},
    {key: 'books', label: 'Books'},
    {key: 'painting', label: 'Painting'},
    {key: 'exchange', label: 'Exchange'},
  ];

  const filteredBooks =
    activeTab === 'All'
      ? books
      : books.filter(item => item.type === activeTab);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header title="Market" />

      <ScrollView style={styles.content}>
        {/* Search Bar */}
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

        {/* Filter Tabs */}
        <View style={styles.tabs}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tab, activeTab === tab.key && styles.activeTab]}
              onPress={() => setActiveTab(tab.key)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.key && styles.activeTabText,
                ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Filtered Book List */}
        <FlatList
          data={filteredBooks}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Image style={{width: 180, height: 250}} source={item.image} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.item}>Author: {item.Author}</Text>
              <Text style={styles.item}>Price: {item.Price}</Text>
              <TouchableOpacity style={{height: 40}}>
                <Text style={styles.button}>Commander</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={numColumns}
          ListEmptyComponent={
            <Text style={{textAlign: 'center', marginTop: 20}}>
              No items found.
            </Text>
          }
        />

        <View style={{height: 100}} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: 340,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 500,
  },
  item: {
    flex: 1,
  },
  button: {
    flex: 1,
    fontWeight: 600,
    color: colors.Quaternary,
    marginBottom: 20,
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
