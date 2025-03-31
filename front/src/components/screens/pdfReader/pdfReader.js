import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Pdf from 'react-native-pdf';
import Slider from '@react-native-community/slider';
import _ from 'lodash';

export default function App({navigation}) {
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };
  
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const pdfRef = React.useRef();

  const throttleOnSliderValueChange = React.useCallback(
    _.throttle(value => {
      pdfRef.current && pdfRef.current.setPage(Math.floor(value));
    }, 200),
    [],
  );

  const onSlidingComplete = value => {
    pdfRef.current && pdfRef.current.setPage(Math.floor(value));
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.container]}>
        <Pdf
          trustAllCerts={false}
          source={source}
          ref={pdfRef}
          onLoadComplete={(numberOfPages, filePath) => {
            setTotalPages(numberOfPages);
          }}
          onPageChanged={(page, numberOfPages) => {
            setCurrentPage(page);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={[styles.pdf, fullScreen && styles.fullScreenContainer]}
        />
        <View style={styles.verticalSliderContainer}>
          <Slider
            value={currentPage}
            minimumValue={1}
            maximumValue={totalPages}
            step={0}
            minimumTrackTintColor="white"
            maximumTrackTintColor="white"
            vertical={true}
            slideOnTap={true}
            onValueChange={throttleOnSliderValueChange}
            onSlidingComplete={onSlidingComplete}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.exitButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.exitButtonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  fullScreenContainer: {
    marginTop: 0,
    width: '100%',
    height: '100%',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  verticalSliderContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 30,
    marginRight: 0,
  },
  exitButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  exitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fullScreenButton: {
    position: 'fixed',
    top: 40,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  fullScreenButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
