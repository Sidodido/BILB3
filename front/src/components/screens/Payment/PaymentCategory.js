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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, icons} from '../../constants';
import {Dimensions} from 'react-native';
import Header from '../../header2';
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

  return (
    <View style={styles.container}>
      <Header title={'Payment Category'} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.instructionText}>choose your payment method</Text>
        <FlatList
          data={paymentMethods}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                styles.item,
                selectedIndex === index && {
                  backgroundColor: colors.primary,
                  color: colors.Quaternary,
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
                  source={icons.addBook}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <Button
        style={styles.confirmButton}
        mode="contained"
        onPress={handleConfirm}>
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
