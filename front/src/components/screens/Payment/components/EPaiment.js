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
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const {width} = Dimensions.get('window');
const scale = width / 420;

const PaymentCategory = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
  const paymentMethods = ['Credit card', 'payPal'];
     const [text, onChangeText] = React.useState('');
       const [checked, setChecked] = useState(false);
  const paymentRoutes = {
    'Credit card': 'CreditCard',
    payPal: 'Paypal',
  };
  const paymentImages = {
    'Credit card': require('../../../../assets/icons/visaCard.png'),
    payPal: require('../../../../assets/icons/payPal.png'),
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

  return (
    <View style={styles.container}>
      <Header title={'Let’s pay with E-payment'} />
      <ScrollView>
        <Text style={styles.instructionText}>Choose your E-payment method</Text>
        <FlatList
          data={paymentMethods}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity
                style={[
                  styles.item,
                  selectedIndex === index && {
                    backgroundColor: colors.primary,
                  },
                ]}
                onPress={() => setSelectedIndex(index)}>
                <View style={styles.itemRow}>
                  <Text
                    style={[
                      styles.text,
                      selectedIndex === index && {color: colors.Quaternary},
                    ]}>
                    {item}
                  </Text>
                  <Image
                    style={[
                      styles.icon,
                      selectedIndex === index && {tintColor: colors.Quaternary},
                    ]}
                    source={paymentImages[item]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* Affichage conditionnel de la section PayPal */}
        {selectedIndex !== null &&
          paymentMethods[selectedIndex] === 'Credit card' && (
            <View>
              <View
                style={{
                  marginBottom: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
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
                    left: 50,
                    paddingLeft: 10,
                  }}>
                  User name
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
                    width: 130,
                    top: 60,
                    left: 50,
                    paddingLeft: 10,
                  }}>
                  Number of card
                </Text>

                <View flexDirection={'row'}>
                  <View>
                    <TextInput
                      style={styles.input2}
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
                        top: -3,
                        left: 20,
                        paddingLeft: 10,
                      }}>
                      Date
                    </Text>
                  </View>
                  <View>
                    <TextInput
                      style={{
                        width: 140,
                        borderRadius: 10,
                        height: 50,
                        margin: 7,
                        borderWidth: 1.5,
                        padding: 10,

                        borderColor: colors.black,
                        color: colors.Quaternary,
                      }}
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
                        width: 50,
                        top: -3,
                        left: 20,
                        paddingLeft: 10,
                      }}>
                      CVV
                    </Text>
                  </View>
                </View>

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
                    width: 130,
                    top: 190,
                    left: 50,
                    paddingLeft: 10,
                  }}>
                  Number phone
                </Text>
                <TouchableOpacity
                  style={styles.container2}
                  onPress={() => setIsChecked(!isChecked)}>
                  <Image
                    style={isChecked ? styles.checkbox : styles.checkbox2}
                    source={isChecked ? icons.mark : icons.check}
                  />

                  <Text style={styles.textPrivacy}>
                    I accept privacy policy
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        {/* Affichage conditionnel de la section PayPal */}
        {selectedIndex !== null &&
          paymentMethods[selectedIndex] === 'payPal' && (
            <View style={{top: 0, marginLeft: 10, marginTop: 50}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Résumé</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal'}}>
                Per dissimulanter inpendentium est super per habitu per
                dissimulanter noscere ipsa conspiratione laudes audire relaturi
                egentium adsistendo conspiratione parum colligendos.
              </Text>

              <View
                style={{
                  width: '100%',
                  backgroundColor: '#D9D9D9',
                  height: 150,
                  marginTop: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 250, height: 80}}
                  source={icons.payPalimg}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: colors.Quaternary,
                  }}>
                  Nous vous redirigerons vers PayPal pour finaliser votre achat.
                </Text>
              </View>
            </View>
          )}
      </ScrollView>

      <Button
        style={styles.confirmButton}
        mode="contained"
        onPress={()=> navigation.navigate('DonePaiment')}>
        <Text style={styles.confirmText}>Confirm</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  checkbox: {
    height: 20,
    width: 20,
    color: colors.Quaternary,
  },
  checkbox2: {
    height: 20,
    width: 20,
    color: 'gray',
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
  input2: {
    width: 190,
    borderRadius: 10,
    height: 50,
    margin: 7,
    borderWidth: 1.5,
    padding: 10,

    borderColor: colors.black,
    color: colors.Quaternary,
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
  textPrivacy: {
    fontSize: 16,
    marginLeft:10,
    fontWeight: 'bold',
    color: colors.black,
  },
  icon: {
    width: 20,
    height: 20,
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
