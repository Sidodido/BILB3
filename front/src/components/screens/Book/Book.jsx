import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import {Button, Card, Switch} from 'react-native-paper';

import {Modal} from 'react-native-paper';
import {colors, icons, images} from '../../constants';
import {Dimensions} from 'react-native';
import Header from '../../header';
import Slider from './components/Slider';
import Carrousel from './components/carrousel';
import CarrouselRounded from './components/carrouselRounded';
import {BookContext} from './components/BookContext';

const {width} = Dimensions.get('window');
const scale = width / 420;

export default function Books({navigation}) {
  const [visible, setVisible] = React.useState(false);
  const {selectedBook, setSelectedBook} = useContext(BookContext);

  const showModal = book => {
    setSelectedBook(book);
    setVisible(true);
  };

  const hideModal = () => setVisible(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header title="Ebooks" />
      <ScrollView>
        <View style={{height: 400, marginBottom: 0}}>
          <Slider />
        </View>

        <Text style={styles.sectionTitle}>Popular on Bilb</Text>
        <CarrouselRounded onBookSelect={showModal} />

        <Text style={styles.sectionTitle}>Continue Reading</Text>
        <Carrousel onBookSelect={showModal} />

        <Text style={styles.sectionTitle}>Previews</Text>
        <Carrousel onBookSelect={showModal} />

        <Text style={styles.sectionTitle}>Trending Now</Text>
        <Carrousel onBookSelect={showModal} />

        <Text style={styles.sectionTitle}>New Releases</Text>
        <Carrousel onBookSelect={showModal} />
      </ScrollView>

      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}>
        <TouchableOpacity style={styles.modalCloseButton} onPress={hideModal}>
          <View />
          <Image source={icons.plus} style={styles.closeIcon} />
        </TouchableOpacity>

        {selectedBook && (
          <View style={styles.modalContent}>
            <Image source={selectedBook.image} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{selectedBook.title}</Text>

            <View style={styles.bookDetails}>
              <Text style={styles.textCard}>Author: {selectedBook.Author}</Text>
              <Text style={styles.textCard}>Year: {selectedBook.Year}</Text>
              <Text style={styles.textCard}>ISBN: {selectedBook.Isbn}</Text>
              <Text style={styles.textCard}>Type: {selectedBook.type}</Text>
              <Text style={styles.textCard}>Price: {selectedBook.Price}</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.textCard}>Description: </Text>
                <ScrollView style={styles.descriptionScroll}>
                  <Text style={styles.descriptionText}>
                    {selectedBook.Description}
                  </Text>
                </ScrollView>
              </View>
            </View>
          </View>
        )}

        <View style={styles.commandButtonContainer}>
          <Button
            style={styles.commandButton}
            mode="contained"
            onPress={() => navigation.navigate('PdfReader')}>
            <Text style={styles.commandButtonText}>Read</Text>
          </Button>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 15,
    marginBottom: 15,
    color: colors.Quaternary,
  },
  modalContainer: {
    padding: 30 * scale,
    margin: 30 * scale,
    backgroundColor: colors.white,
    borderRadius: 20 * scale,
    zIndex: 10,
    position: 'fixed',
  },
  modalCloseButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeIcon: {
    height: 30 * scale,
    width: 30 * scale,
    tintColor: colors.Quaternary,
    padding: 0,
    margin: 0,
    transform: [{rotate: '45deg'}],
  },
  modalContent: {
    alignItems: 'center',
  },
  modalImage: {
    width: 140,
    height: 220,
    marginHorizontal: 'auto',
    marginBottom: 15,
  },
  modalTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20 * scale,
    color: colors.Quaternary,
    marginBottom: 10 * scale,
  },
  bookDetails: {
    width: '100%',
    alignItems: 'flex-start',
  },
  textCard: {
    fontSize: 16 * scale,
    marginBottom: 5 * scale,
    color: colors.black,
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  descriptionScroll: {
    height: 100,
  },
  descriptionText: {
    fontSize: 14 * scale,
    color: colors.gray,
  },
  commandButtonContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
  commandButton: {
    width: 170 * scale,
    backgroundColor: colors.Quaternary,
    borderRadius: 10 * scale,
    marginHorizontal: 'auto',
  },
  commandButtonText: {
    color: 'white',
    fontSize: 17 * scale,
    fontWeight: 'bold',
  },
});
