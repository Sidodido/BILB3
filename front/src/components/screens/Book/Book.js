import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {colors, icons, images} from '../../constants';
import {Dimensions} from 'react-native';
import Header from '../../header';
import Carousel from 'react-native-snap-carousel';
const {width} = Dimensions.get('window');
const scale = width / 420;




  const Data = [
    {id:1, title:"titre 1"},
    {id:2, title:"titre 1"},
    {id:3, title:"titre 1"},
    {id:4, title:"titre 1"},
    {id:5, title:"titre 1"},
    {id:6, title:"titre 1"},
  ]
  const Mycarrousel = ({data}) =>{
    const renderItem = ({item}) => (<View style={styles.slide}>
          <Text style={styles.title}>{ item.title }</Text>
      </View>)
  return (
    <Carousel
    ref={(c) => { this._carousel = c; }}
    data={data}
    renderItem={renderItem}
    sliderWidth={sliderWidth}
    itemWidth={itemWidth}
  />
  );
}



export default function Book() {


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header title="Books" />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          alignItems: 'center',
        }}>

<Mycarrousel data={Data}/>


          
        </View>
    </SafeAreaView>
  );
}
