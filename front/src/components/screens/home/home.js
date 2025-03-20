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
} from 'react-native';
import Header from '../../header';
import {colors, icons, images} from '../../constants';

// Mock data for stories and posts
const stories = [
  {
    id: 1,
    type: 'create',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1248&q=80',
  },
];

const posts = [
  {
    id: 1,
    author: 'Ahmed Nadir',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    time: '5h',
    content:
      "Je souhaite partager aujourd'hui avec vous le dernier Livre que je viens de terminer de lire, et je peux vous dire que ce lire est un chef-d'œuvre, je vous le conseil vivement il vous le mène dans une toute autre dimension...",
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
    bookImage:
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    author: 'BILB - OFFICIAL',
    avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    time: '5h',
    content:
      'En Prochaine apparition, De Rêves et de Papiers un Livre de Rozenn le Berre, découvrez la quatrième de couverture ci-dessous',
    bookCover:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    author: 'BILB - OFFICIAL',
    avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    time: '2h',
    content:
      'Nationalité : Algérie Né(e) à : Taghzout Yousef (Constantine), le 20/02/1929 Mort(e) à : Université, le 28/10/1959...',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
];

// Mock data for books stories
const bookStories = [
  {
    id: 1,
    type: 'create',
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
];

export default function home({navigation}) {
  const [activeTab, setActiveTab] = useState('stories');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}

      <Header title="Home" />

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
        {/* What's New Section */}
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
        {/* Navigation Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'stories' && styles.activeTab]}
            onPress={() => setActiveTab('stories')}>
            <Image
              name="book-open"
              source={images.story}
              size={10}
              style={{
                width: 25,
                height: 13,
                tintColor: activeTab === 'stories' ? '#1a73e8' : '#666',
              }}
              color={activeTab === 'stories' ? '#1a73e8' : '#666'}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === 'stories' && styles.activeTabText,
              ]}>
              Stories
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'books' && styles.activeTab]}
            onPress={() => setActiveTab('books')}>
            <Image
              name="book-open"
              source={images.book}
              style={{
                width: 16,
                height: 18,
                tintColor: activeTab === 'stories' ? '#666' : '#1a73e8',
              }}
              size={20}
              color={activeTab === 'books' ? '#1a73e8' : '#666'}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === 'books' && styles.activeTabText,
              ]}>
              Books
            </Text>
          </TouchableOpacity>
        </View>

        {/* Stories Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesContainer}>
          {(activeTab === 'stories' ? stories : bookStories).map(story => (
            <View key={story.id} style={styles.storyItem}>
              <View style={styles.storyImageContainer}>
                <Image source={{uri: story.image}} style={styles.storyImage} />
                {story.type === 'create' && (
                  <View style={styles.createStoryButton}>
                    <Image
                      source={images.plus}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: colors.white,
                      }}
                      name="plus"
                      size={12}
                      color="white"
                    />
                  </View>
                )}
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Posts */}
        <View style={styles.posts}>
          {posts.map(post => (
            <View key={post.id} style={styles.post}>
              <View style={styles.postHeader}>
                <Image source={{uri: post.avatar}} style={styles.avatar} />
                <View style={styles.postHeaderText}>
                  <Text style={styles.author}>{post.author}</Text>
                  <Text style={styles.time}>{post.time}</Text>
                </View>
              </View>
              <Text style={styles.content}>{post.content}</Text>
              {post.image && (
                <Image source={{uri: post.image}} style={styles.postImage} />
              )}
              {post.bookImage && (
                <Image
                  source={{uri: post.bookImage}}
                  style={styles.bookImage}
                />
              )}
              {post.bookCover && (
                <View style={styles.bookPreview}>
                  <Image
                    source={{uri: post.bookCover}}
                    style={styles.bookCoverImage}
                  />
                  <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle}>De Rêves et de Papiers</Text>
                    <Text style={styles.bookDescription}>
                      Un livre captivant qui explore...
                    </Text>
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>
        <View style={{height: 100}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
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
