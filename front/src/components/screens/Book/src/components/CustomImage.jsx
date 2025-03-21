import {StyleSheet, Image, View,Text} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';

const CustomImage = ({item, x, index, size, spacer, totalImages}) => {
  const [aspectRatio, setAspectRatio] = useState(0);

  // Get Image Width and Height to Calculate AspectRatio
  useLayoutEffect(() => {
    if (item.image) {
      const {width, height} = Image.resolveAssetSource(item.image);
      setAspectRatio(width / height);
    }
  }, [item.image]);

  const middleIndex = Math.floor(totalImages / 2); // Calculate the middle index

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 3) * size,
        (index - 2) * size,
        (index - 1) * size,
        index * size,
      ],
      [0, 0.8, 1, 0.8],
    );

    // Set zIndex: Middle image has the highest zIndex
    const zIndex = index === middleIndex ? 1 : 0; // Middle image has zIndex 1, others have 0

    return {
      transform: [{scale}],
      zIndex: zIndex,
    };
  });

  if (!item.image) {
    return <View style={{width: spacer}} key={index} />;
  }

  return (
    <View style={{width: size}} key={index}>
      <Animated.View style={[styles.imageContainer, style]}>
        <Image
          source={item.image}
          style={[styles.image, {aspectRatio: aspectRatio}]}
        />
      </Animated.View>
      
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    marginLeft: -20,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: undefined,
    backgroundColor: 'white',
  },
});
