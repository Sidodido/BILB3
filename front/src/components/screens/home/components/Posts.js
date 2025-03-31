import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, StatusBar, Platform} from 'react-native';
import {colors, icons, images} from '../../../constants';

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
const Posts = () => {
  return (
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
            <Image source={{uri: post.bookImage}} style={styles.bookImage} />
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
  );
};

export default Posts;

const styles = StyleSheet.create({
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
