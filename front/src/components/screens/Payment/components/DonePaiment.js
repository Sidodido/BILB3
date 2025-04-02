import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react'
import Header from '../../../header2';
import {colors, icons, images} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import { Button } from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420;


const DonePaiment = () => {
      const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Header title={'Done !'} />
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image style={{width: 200, height: 300}} source={images.livre1} />

          <Text style={{fontSize: 19, fontWeight: 700, marginTop: 10}}>
            Titre du livre
          </Text>
          <View style={{width: 200}}>
            <Text style={{fontSize: 14, fontWeight: 500, marginTop: 5}}>
              Author :
            </Text>
            <Text style={{fontSize: 14, fontWeight: 500, marginTop: 5}}>
              Price :
            </Text>
            <Text style={{fontSize: 14, fontWeight: 500, marginTop: 5}}>
              Year of edition :
            </Text>
          </View>

          <View style={{width: 350, marginTop: 20}}>
            <Text style={{marginBottom: 10}}>
              You Will Receive your order in few days, We'll let send you a
              notification on your phone when the delivery person is on the way
              to your adresse
            </Text>
            <Text>
              Always keep an eye on your items being delivered, scan the QR code
              below, to see the status of your order
            </Text>

            <Image style={{marginTop: 30}} source={images.qrCode} />
            <Text style={{fontWeight: 700, marginTop: 30}}>
              For any problem with your order, please call: +213 556 or send Us
              an E-mail on : digital.library@outlook.fr
            </Text>
            <TouchableOpacity>
              <Text
                onPress={() => navigation.navigate('Receipt')}
                style={{
                  fontWeight: 700,
                  marginTop: 30,
                  color: colors.Quaternary,
                  textAlign: 'center',
                }}>
                Click here to view receipt
              </Text>
            </TouchableOpacity>
            <Button
              style={styles.confirmButton}
              mode="contained"
              onPress={() => navigation.navigate('OrderDetails')}>
              <Text style={styles.confirmText}>Order details</Text>
            </Button>

            <View style={{height: 100}}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  confirmButton: {
    width: 290 * scale,
    backgroundColor: colors.Quaternary,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
    confirmText: {
      color: colors.white,
      fontSize: 17 * scale,
      fontWeight: '500',
      textAlign: 'center',
    },



})
export default DonePaiment