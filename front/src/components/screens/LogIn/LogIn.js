import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';

import {colors, icons, images} from '../../constants';
import {Dimensions} from 'react-native';
import {Button} from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420;

export default function LogIn({navigation}) {
  const [show, setShow] = React.useState(false);
  const [text, onChangeText] = React.useState('');
  const [mdp, onChangeMdp] = React.useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginVertical: 'auto',
          }}>
          <Image
            source={images.LOGO2}
            style={{
              width: 300 * scale,
              height: 200 * scale,
              marginBottom: 50 * scale,
            }}
          />

          <View style={{width: '100%'}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder=""
              keyboardType="numeric"
            />

            <Text
              style={{
                fontWeight: 'bold',
                color: colors.black,
                position: 'absolute',
                backgroundColor: '#fff',
                width: 90,
                top: -3,
                left: 20,
                paddingLeft: 10,
              }}>
              User Name
            </Text>

            <TextInput
              style={styles.input}
              onChangeText={onChangeMdp}
              value={mdp}
              placeholder=""
              keyboardType="numeric"
            />

            <Text
              style={{
                fontWeight: 'bold',
                color: colors.black,
                position: 'absolute',
                backgroundColor: '#fff',
                width: 80,
                top: 60,
                left: 20,
                paddingLeft: 10,
              }}>
              Password
            </Text>
          </View>
          <Button
            style={{
              width: 170 * scale,
              backgroundColor: colors.Quaternary,
              marginBottom: 40,
              left: 80,
              top: 10,
              borderRadius: 10,
              color: colors.white,
            }}
            mode="contained"
            onPress={() => navigation.navigate('Main')}>
            <Text
              style={{
                color: colors.white,
                fontSize: 17 * scale,
                fontWeight: 'bold',
              }}>
              LOG IN
            </Text>
          </Button>
          <Text
            style={{
              color: colors.black,
              fontSize: 17 * scale,
            }}>
            you don’t have account ?{' '}
            <Text
              onPress={() => navigation.navigate('SignIn')}
              style={{
                color: colors.Quaternary,
                fontSize: 17 * scale,
              }}>
              sign in
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>

    //  <Navigation/>
  );
}
const styles = StyleSheet.create({
  input: {
    width: 350,
    borderRadius: 10,
    height: 50,
    margin: 7,
    borderWidth: 1.5,
    padding: 10,

    borderColor: colors.black,
    color: colors.Quaternary,
  },
});
