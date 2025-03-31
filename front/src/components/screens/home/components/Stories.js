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
const Stories = () => {
  const [activeTab, setActiveTab] = useState('stories');

  return (
    <View>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'stories' && styles.activeTab]}
          onPress={() => setActiveTab('stories')}>
          <Image
            name="book-open"
            source={icons.live}
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
            source={icons.book2}
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
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
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
});
