import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';

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
              width: 250 * scale,
              height: 170 * scale,
              marginBottom: 20 * scale,
            }}
          />
          <View style={{marginBottom: 20 * scale}}>
            <Text
              style={{
                color: colors.black,
                fontSize: 17 * scale,
              }}>
              Already have account ?{' '}
              <Text
                onPress={() => navigation.navigate('LogIn')}
                style={{
                  color: colors.Quaternary,
                  fontSize: 17 * scale,
                }}>
                Log in
              </Text>
            </Text>
          </View>
          <ScrollView>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginVertical: 'auto',
              }}>
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
                    width: 100,
                    top: -3,
                    left: 20,
                    paddingLeft: 10,
                  }}>
                  User Name
                </Text>

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
                    width: 100,
                    top: 60,
                    left: 20,
                    paddingLeft: 10,
                  }}>
                  Date of birth
                </Text>

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
                    width: 95,
                    top: 126,
                    left: 20,
                    paddingLeft: 10,
                  }}>
                  Occupation
                </Text>

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
                    width: 80,
                    top: 189,
                    left: 20,
                    paddingLeft: 10,
                  }}>
                  Country
                </Text>
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
                    width: 60,
                    top: 252 ,
                    left: 20,
                    paddingLeft: 10,
                  }}>
                  Email
                </Text>
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
                    width: 85,
                    top:315 ,
                    left: 20,
                    paddingLeft: 10,
                  }}>
                  Password
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
                    width: 150,
                    top:382 ,
                    left: 20,
                    paddingLeft: 10,
                  }}>
                  Confirm Password
                </Text>
              </View>
              <Button
                style={{
                  width: 130 * scale,
                  backgroundColor: colors.Quaternary,
                  left: 100,
                  top: 10,
                  borderRadius: 10,
                  color: colors.white,
                  marginBottom: 100,
                }}
                mode="contained"
                onPress={() => navigation.navigate('LogIn')}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 17 * scale,
                    fontWeight: 'bold',
                  }}>
                  Register
                </Text>
              </Button>
            </View>
          </ScrollView>
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
