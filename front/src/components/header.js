import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors, icons, images} from './constants';

const {width} = Dimensions.get('window');
const scale = width / 420;

const Header = ({title}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const translateY = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            resizeMode="contain"
            style={styles.drawerIcon}
            source={icons.drawer}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={images.LOGO2}
          />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setModalVisible(true)}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={icons.notif}
          />
        </TouchableOpacity>
      </View>
      {/* Bottom Sheet */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <Animated.View
              style={[styles.modalContent, {transform: [{translateY}]}]}>
              <Text style={styles.modalTitle}>Notifications</Text>
              <Text style={styles.modalText}>
                Aucune notification disponible
              </Text>
              
              {/* <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Fermer</Text>
              </TouchableOpacity> */}
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 16 * scale,
    paddingHorizontal: 20 * scale,
    backgroundColor: colors.white,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  drawerIcon: {
    height: 35 * scale,
    width: 35 * scale,
    marginTop: 10,
    tintColor: colors.Quaternary,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: 70 * scale,
    width: 100 * scale,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 25 * scale,
    textAlign: 'center',
    color: colors.black,
  },
  iconContainer: {
    height: 45 * scale,
    width: 45 * scale,
    borderRadius: 50 * scale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 30 * scale,
    width: 30 * scale,
    marginTop: 13,
    tintColor: colors.Quaternary,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: colors.Quaternary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Header;
