import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../../header2';
import {colors, icons, images} from '../../../constants';

const OrderDetails = () => {
  return (
    <View style={styles.container}>
      <Header title={'Order details'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
export default OrderDetails;
