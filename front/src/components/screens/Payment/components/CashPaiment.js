import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, icons} from '../../../constants';
import {Dimensions} from 'react-native';
import Header from '../../../header2';
import {Button} from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420;

const PaymentCategory = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigation = useNavigation();
  const paymentMethods = ['Cash', 'E-payment Card', 'Dahabia'];
  const paymentRoutes = {
    Cash: 'CashPaiment',
    'E-payment Card': 'Epaiment',
    Dahabia: 'DahabiaPaiment',
  };

  const handleConfirm = () => {
    if (selectedIndex !== null) {
      const selectedMethod = paymentMethods[selectedIndex];
      const routeName = paymentRoutes[selectedMethod];
      if (routeName) {
        navigation.navigate(routeName, {paymentMethod: selectedMethod});
      }
    }
  };
   const [show, setShow] = React.useState(false);
    const [text, onChangeText] = React.useState('');
    const [mdp, onChangeMdp] = React.useState('');
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
    <View style={styles.container}>
      <Header title={"Let's pay cash"} />
      <Text style={styles.instructionText}>Enter this informations</Text>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 30,
        }}>
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
            </View>
          </View>
        </ScrollView>
      </View>
      <Button
        style={styles.confirmButton}
        mode="contained"
        onPress={() => navigation.navigate('DonePaiment')}>
        <Text style={styles.confirmText}>Confirm</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  instructionText: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.Quaternary,
    marginTop: 30,
  },
  item: {
    padding: 15,
    backgroundColor: colors.lightGray,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'flex-start',
    width: '96%',
    marginHorizontal: 10,
  },
  itemRow: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  icon: {
    width: 20,
    height: 20,
  },
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
});

export default PaymentCategory;
