import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const tracks = [
  {
    id: '1',
    title: 'Song 1',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: '2',
    title: 'Song 2',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: '3',
    title: 'Song 3',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
];

const Ebook = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [volume, setVolume] = useState(1.0);

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

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Ebook Music Player</Text>
      <FlatList
        data={tracks}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Button
            title={isPlaying && currentTrackIndex === index ? 'Stop' : `Play ${item.title}`}
            onPress={() => playTrack(index)}
          />
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Button title="Previous" onPress={playPrevious} />
        <Button title="Stop" onPress={stopSound} />
        <Button title="Next" onPress={playNext} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Volume</Text>
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
      </View>
    </View>
  );
};

export default Ebook;
