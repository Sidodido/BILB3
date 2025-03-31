// import React, {useEffect, useState, useRef} from 'react';
// import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
// import Pdf from 'react-native-pdf';
// import RNFS from 'react-native-fs';

// const PDFViewer = () => {
//   const [fileExists, setFileExists] = useState(false);
//   const [highlight, setHighlight] = useState(false);
//   const pdfRef = useRef(null);
//   const localPath = `${RNFS.DocumentDirectoryPath}/cv.pdf`;
//   const url =
//     'https://raw.githubusercontent.com/Sidodido/SEAALAPP/main/cv%20sidahmed.pdf';

//   useEffect(() => {
//     const checkAndDownloadPDF = async () => {
//       const exists = await RNFS.exists(localPath);
//       if (!exists) {
//         try {
//           await RNFS.downloadFile({fromUrl: url, toFile: localPath}).promise;
//           console.log('PDF téléchargé:', localPath);
//           setFileExists(true);
//         } catch (error) {
//           console.log('Erreur de téléchargement:', error);
//         }
//       } else {
//         setFileExists(true);
//       }
//     };

//     checkAndDownloadPDF();
//   }, []);

//   // Fonction pour le défilement automatique
//   const scrollToNextPage = () => {
//     if (pdfRef.current) {
//       pdfRef.current.setPage(pdfRef.current.page + 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Boutons */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => setHighlight(!highlight)}>
//           <Text style={styles.buttonText}>
//             {highlight ? 'Désactiver Surligneur' : 'Activer Surligneur'}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={scrollToNextPage}>
//           <Text style={styles.buttonText}>Page Suivante</Text>
//         </TouchableOpacity>
//       </View>
//       {fileExists ? (
//         <>
//           <Pdf
//             ref={pdfRef}
//             source={{uri: `file://${localPath}`}}
//             style={[styles.pdf, highlight && styles.highlight]}
//             onError={error => console.log('Erreur PDF:', error)}
//           />
//         </>
//       ) : (
//         <Text>Téléchargement du PDF en cours...</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pdf: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   highlight: {
//     backgroundColor: 'rgba(255, 255, 0, 0.3)', // Effet de surbrillance
//   },
//   buttonContainer: {
//     position: 'fixed',
//     bottom: 20,
//     flexDirection: 'row',
//     gap: 10,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default PDFViewer;





// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';
// import Pdf from 'react-native-pdf';
// import Slider from '@react-native-community/slider';
// import _ from 'lodash';

// export default function App({navigation}) {
//   const source = {
//     uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
//     cache: true,
//   };

//   const [currentPage, setCurrentPage] = React.useState(1);
//   const [totalPages, setTotalPages] = React.useState(null);
//   const [fullScreen, setFullScreen] = useState(false);
//   const pdfRef = React.useRef();

//   const throttleOnSliderValueChange = React.useCallback(
//     _.throttle(value => {
//       pdfRef.current && pdfRef.current.setPage(Math.floor(value));
//     }, 200),
//     [],
//   );

//   const onSlidingComplete = value => {
//     pdfRef.current && pdfRef.current.setPage(Math.floor(value));
//   };

//   return (
//     <View style={[styles.container]}>
      
//         <View
//           style={[styles.container]}>
//           <Pdf
//             trustAllCerts={false}
//             source={source}
//             ref={pdfRef}
//             onLoadComplete={(numberOfPages, filePath) => {
//               setTotalPages(numberOfPages);
//             }}
//             onPageChanged={(page, numberOfPages) => {
//               setCurrentPage(page);
//             }}
//             onError={error => {
//               console.log(error);
//             }}
//             onPressLink={uri => {
//               console.log(`Link pressed: ${uri}`);
//             }}
//             style={[styles.pdf, fullScreen && styles.fullScreenContainer]}
//           />
//           <View style={styles.verticalSliderContainer}>
//             <Slider
//               value={currentPage}
//               minimumValue={1}
//               maximumValue={totalPages}
//               step={0}
//               minimumTrackTintColor="white"
//               maximumTrackTintColor="white"
//               vertical={true}
//               slideOnTap={true}
//               onValueChange={throttleOnSliderValueChange}
//               onSlidingComplete={onSlidingComplete}
//             />
//           </View>
//         </View>
      
     
//         <TouchableOpacity
//           style={styles.exitButton}
//           onPress={() => navigation.goBack()}>
//           <Text style={styles.exitButtonText}>Exit</Text>
//         </TouchableOpacity>
     
     
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 25,
//   },
//   fullScreenContainer: {
//     marginTop: 0,
//     width: '100%',
//     height: '100%',
//   },
//   pdf: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
//   verticalSliderContainer: {
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     marginBottom: 30,
//     marginRight: 0,
//   },
//   exitButton: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 5,
//   },
//   exitButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   fullScreenButton: {
//     position: 'fixed',
//     top: 40,
//     right: 20,
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   fullScreenButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

