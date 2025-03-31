import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from 'react-native-reanimated';
import CustomImage from './CustomImage';
import {colors, icons} from '../../../constants';
const CustomImageCarousal = ({data, autoPlay}) => {
  const scrollViewRef = useAnimatedRef(null);
  const interval = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [newData, setNewData] = useState([
    {key: 'spacer-left'},
    ...data,
    {key: 'spacer-right'},
  ]);
  const {width} = useWindowDimensions();
  const SIZE = width * 0.3;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);

  // Update newData if data change
  useEffect(() => {
    setNewData([{key: 'spacer-left'}, ...data, {key: 'spacer-right'}]);
  }, [data]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
    onMomentumEnd: e => {
      offSet.value = e.contentOffset.x;
    },
  });

  useEffect(() => {
    if (isAutoPlay === true) {
      let _offSet = offSet.value;
      interval.current = setInterval(() => {
        if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
          _offSet = 0;
        } else {
          _offSet = Math.floor(_offSet + SIZE);
        }
        scrollViewRef.current.scrollTo({x: _offSet, y: 0});
      }, 2000);
    } else {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [SIZE, SPACER, isAutoPlay, data.length, offSet.value, scrollViewRef]);

  return (
    <View style={{marginBottom: 50}}>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onScrollBeginDrag={e => {
          setIsAutoPlay(false);
        }}
        style={{backgroundColor: 'white'}}
        onMomentumScrollEnd={e => {
          const offsetX = e.nativeEvent.contentOffset.x;
          const index = Math.round(offsetX / SIZE);
          setCurrentIndex(index - 1); // Subtract 1 because of 'spacer-left'
          setIsAutoPlay(autoPlay);
        }}
        scrollEventThrottle={10}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        {newData.map((item, index) => {
          return (
            <View>
              <View>
                <CustomImage
                  key={index}
                  index={index}
                  item={item}
                  x={x}
                  size={SIZE}
                  spacer={SPACER}
                />
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>

      <Text style={styles.selectedTitle}>
        {newData[currentIndex]?.title || 'No Title Available'}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'white',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={icons.plus} style={{width: 25, height: 25}} />
          </View>
          <Text style={styles.buttonText}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 7}}>
          <View
            style={{
              width: 120,
              height: 40,
              borderRadius: 10,
              backgroundColor: colors.Quaternary,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={icons.book}
              tintColor={'white'}
              style={{width: 25, height: 25, marginRight: 5}}
            />
            <Text
              style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>
              Read
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'white',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={icons.info} style={{width: 25, height: 25}} />
          </View>
          <Text style={styles.buttonText}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: '#fff',
    height: 350,
  },
  list: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: 150,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
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
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0000',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    width: 40,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default CustomImageCarousal;
