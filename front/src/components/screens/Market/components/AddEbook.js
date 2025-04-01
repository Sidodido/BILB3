import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors, icons, images} from '../../../constants';
import {Dimensions} from 'react-native';
import {Button} from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420;

import Header from '../../../header2';
const AddEbook = () => {
  const [show, setShow] = React.useState(false);
  const [text, onChangeText] = React.useState('');
  const [mdp, onChangeMdp] = React.useState('');
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES ||
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Gallery Access',
          message: 'App needs access to your gallery to select a photo',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; // iOS doesn't need runtime permission
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'You need to allow gallery access.');
      return;
    }

    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled the picker');
      } else if (response.errorMessage) {
        Alert.alert('Error', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <Header title={'Add a Ebook'} />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginVertical: 'auto',
        }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginVertical: 'auto',
            }}>
            <TouchableOpacity onPress={pickImage}>
              <View flexDirection={'row'}>
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    marginBottom: 30,
                    tintColor: selectedImage ? null : colors.Quaternary,
                  }}
                  source={selectedImage ? {uri: selectedImage} : icons.document}
                />
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    marginBottom: 30,
                    tintColor: selectedImage ? null : colors.Quaternary,
                  }}
                  source={selectedImage ? {uri: selectedImage} : icons.galerie}
                />
              </View>
            </TouchableOpacity>
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
                Title of book
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
                  width: 70,
                  top: 60,
                  left: 20,
                  paddingLeft: 10,
                }}>
                Author
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
                  width: 115,
                  top: 126,
                  left: 20,
                  paddingLeft: 10,
                }}>
                Year of edition
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
                  width: 120,
                  top: 189,
                  left: 20,
                  paddingLeft: 10,
                }}>
                Phone number
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
                  width: 90,
                  top: 252,
                  left: 20,
                  paddingLeft: 10,
                }}>
                Id of seller
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
                  width: 75,
                  top: 315,
                  left: 20,
                  paddingLeft: 10,
                }}>
                Adresse
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
                  width: 60,
                  top: 382,
                  left: 20,
                  paddingLeft: 10,
                }}>
                Price
              </Text>

              <TextInput
                style={{
                  width: 350,
                  borderRadius: 10,
                  height: 100,
                  margin: 7,
                  borderWidth: 1.5,
                  padding: 10,

                  borderColor: colors.black,
                  color: colors.Quaternary,
                }}
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
                  width: 100,
                  top: 447,
                  left: 20,
                  paddingLeft: 10,
                }}>
                Description
              </Text>
            </View>
            <Button
              style={{
                width: 290 * scale,
                backgroundColor: colors.Quaternary,
                height: 50,
                borderRadius: 10,
                color: colors.white,
                marginBottom: 200,
                marginTop: 30,
                justifyContent: 'center',
              }}
              mode="contained"
              onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 17 * scale,
                  fontWeight: 500,
                }}>
                Confirm
              </Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddEbook;

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
