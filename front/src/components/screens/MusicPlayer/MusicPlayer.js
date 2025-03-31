import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,Image,StyleSheet
} from 'react-native';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../header';
import {colors, icons, images} from '../../constants';
import {MaterialIcons} from 'react-native-vector-icons/MaterialIcons';
Sound.setCategory('Playback');

const tracks = [
  {
    id: '1',
    title: 'Song 1',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: require('../../../assets/BilbPhotos/livre1.png'),
    artist: 'zedk',
  },
  {
    id: '2',
    title: 'Song 2',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: require('../../../assets/BilbPhotos/livre2.png'),

    artist: 'zedk',
  },
  {
    id: '3',
    title: 'Song 3',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: require('../../../assets/BilbPhotos/livre3.png'),

    artist: 'zedk',
  },
  {
    id: '4',
    title: 'Song 4',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: require('../../../assets/BilbPhotos/livre4.png'),

    artist: 'zedk',
  },
  {
    id: '5',
    title: 'Song 5',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: require('../../../assets/BilbPhotos/livre5.png'),

    artist: 'zedk',
  },
  {
    id: '6',
    title: 'Song 6',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    image: require('../../../assets/BilbPhotos/livre6.png'),

    artist: 'zedk',
  },
  {
    id: '7',
    title: 'Song 7',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    image: require('../../../assets/BilbPhotos/livre7.png'),
    artist: 'zedk',
  },
  {
    id: '8',
    title: 'Song 8',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    image: require('../../../assets/BilbPhotos/livre8.png'),

    artist: 'zedk',
  },
  {
    id: '9',
    title: 'Song 9',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    image: require('../../../assets/BilbPhotos/livre9.png'),

    artist: 'zedk',
  },
  {
    id: '10',
    title: 'Song 10',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    image: require('../../../assets/BilbPhotos/livre10.png'),

    artist: 'zedk',
  },
  {
    id: '11',
    title: 'Song 11',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    image: require('../../../assets/BilbPhotos/livre11.png'),

    artist: 'zedk',
  },
  {
    id: '12',
    title: 'Song 12',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    image: require('../../../assets/BilbPhotos/livre12.png'),

    artist: 'zedk',
  },
];

const Ebook = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [volume, setVolume] = useState(1.0);
  const [isFavorite, setIsFavorite] = useState(false);
  const playTrack = index => {
    if (isPlaying && currentTrackIndex === index) {
      stopSound();
      return;
    }

    if (sound) {
      sound.stop(() => sound.release());
    }

    const track = tracks[index];
    const newSound = new Sound(track.url, null, error => {
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }
      newSound.setVolume(volume);
      newSound.play(success => {
        if (success) {
          console.log('Successfully finished playing');
        } else {
          console.log('Playback failed');
        }
        setIsPlaying(false);
      });
    });

    setSound(newSound);
    setIsPlaying(true);
    setCurrentTrackIndex(index);
  };

  const stopSound = () => {
    if (sound) {
      sound.stop(() => {
        console.log('Stopped playback');
        sound.release();
        setSound(null);
        setIsPlaying(false);
      });
    } else if (currentTrackIndex !== null) {
      // If no song is currently playing but a song was previously selected, play it
      playTrack(currentTrackIndex);
    }
  };

  const playNext = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(nextIndex);
  };

  const playPrevious = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playTrack(prevIndex);
  };
const [favorites, setFavorites] = useState({});

const toggleFavorite = trackId => {
  setFavorites(prevFavorites => ({
    ...prevFavorites,
    [trackId]: !prevFavorites[trackId],
  }));
};
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header title="Music Player" />
      <View
        style={{
          backgroundColor: colors.Quaternary,
          flex: 1,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          marginHorizontal: 5,
        }}>
        <View
          style={{height: 100, alignItems: 'center', justifyContent: 'center',marginVertical:20}}>
          <Text style={{fontSize: 26, fontWeight: 800, color: 'white'}}>
            Soul and Mind
          </Text>
          <Text style={{fontSize: 16, fontWeight: 300, color: 'white'}}>
            CHKO HIBSON
          </Text>
          <Text style={{fontSize: 12, fontWeight: 600, color: 'white'}}>
            2021 / 7 songs
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            marginLeft: 15,
            marginBottom: 10,
            fontWeight: 300,
          }}>
          TOP SONGS
        </Text>
        <FlatList
          data={tracks}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => playTrack(index)}
              style={{borderRadius: 30}}>
              <ImageBackground
                borderRadius={20}
                source={item.image}
                style={styles.background}
                onPress={() => playTrack(index)}>
                <View onPress={() => playTrack(index)} style={styles.overlay}>
                  <View flexDirection={'row'} alignItems={'center'}>
                    <TouchableOpacity onPress={stopSound}>
                      <Image
                        style={{
                          tintColor: 'white',
                          height: 27,
                          width: 27,
                          marginHorizontal: 16,
                          marginTop: -3,
                        }}
                        source={
                          isPlaying && currentTrackIndex === index
                            ? icons.pause
                            : icons.play
                        }
                      />
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.text}>{item.title}</Text>
                      <Text style={styles.textArtist}>{item.artist}</Text>{' '}
                    </View>
                  </View>

                  <View></View>
                  <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                    <Image
                      style={{
                        tintColor: favorites[item.id] ? 'red' : 'white',
                        width: 27,
                        height: 27,
                      }}
                      source={icons.coeur} // Remplacez par l’icône correcte
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
        <View>
          <View
            style={{
              height: 100,
              backgroundColor: 'black',
              position: 'relative',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,

                backgroundColor: 'black',
                position: 'fixed',
              }}>
              <TouchableOpacity onPress={playPrevious}>
                <Image
                  style={{tintColor: 'white', height: 35, width: 35}}
                  source={icons.left}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={stopSound}>
                <Image
                  style={{
                    tintColor: 'white',
                    height: 40,
                    width: 40,
                    marginHorizontal: 16,
                    marginTop: -3,
                  }}
                  source={isPlaying ? icons.pause : icons.play}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={playNext}>
                <Image
                  style={{tintColor: 'white', height: 35, width: 35}}
                  source={icons.right}
                />
              </TouchableOpacity>
            </View>
            <View style={{display: 'flex', marginTop: 20}}>
              <Slider
                minimumValue={0}
                maximumValue={1}
                step={0.1}
                value={volume}
                onValueChange={value => {
                  setVolume(value);
                  if (sound) {
                    sound.setVolume(value);
                  }
                }}
              />
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: 500,
                }}>
                Sound
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 5,
    marginHorizontal:5
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
    
  },
  text: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  textArtist: {
    color: 'white',
    fontSize: 10,
    fontWeight: 300,

  },
});

export default Ebook;
