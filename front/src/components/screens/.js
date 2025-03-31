import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import News from './components/news';
import FloatingActions from './components/FloatingAction';
import Posts from './components/Posts';
import Stories from './components/Stories';
import Search from './components/Search';
import Header from '../../header';
import {colors, icons, images} from '../../constants';

export default function home({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}

      <Header title="Home" />

      <ScrollView style={{color: '#f8f9ff', fontWeight: 500}}>
        {/* Search Bar */}
        <Search />

        {/* What's New Section */}
        <News />

        {/* Navigation Tabs */}

        <Stories />

        {/* Posts */}
        <Posts />
        <Posts />
        <Posts />

        <View style={{height: 100}}></View>
      </ScrollView>
      <FloatingActions />
    </SafeAreaView>
  );
}
