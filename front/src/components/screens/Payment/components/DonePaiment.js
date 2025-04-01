import {View, Text, StyleSheet} from 'react-native';
import React from 'react'
import Header from '../../../header2';
import {colors, icons} from '../../../constants';

const DonePaiment = () => {
  return (
    <View style={styles.container}>
      <Header title={'Done !'} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },})
export default DonePaiment